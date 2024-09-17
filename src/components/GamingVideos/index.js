import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingHeaderContainer,
  GamingIcon,
  GamingText,
  SideBarGamingContainer,
  GamingContainer,
  GamingVideoImageContainer,
  GamingVideoContentContainer,
  FailureContentContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_Progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {
    GamingVideosData: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstants.in_Progress})
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(ApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        GamingVideosData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderVideoCard = () => {
    const {GamingVideosData} = this.state
    console.log(GamingVideosData)
    return (
      <GamingVideoImageContainer>
        {GamingVideosData.map(eachVideo => (
          <GamingVideoCard
            GamingVideoCardDetails={eachVideo}
            key={eachVideo.id}
          />
        ))}
      </GamingVideoImageContainer>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureContentContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <FailureRetryButton type="button" onClick={this.getVideos}>
        Retry
      </FailureRetryButton>
    </FailureContentContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideoCard()
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingContainer data-testid="gaming">
          <SideBarGamingContainer>
            <SideBar />
          </SideBarGamingContainer>
          <GamingVideoContentContainer>
            <GamingHeaderContainer>
              <GamingIcon />
              <GamingText>Gaming</GamingText>
            </GamingHeaderContainer>
            {this.renderApiStatus()}
          </GamingVideoContentContainer>
        </GamingContainer>
      </>
    )
  }
}

export default GamingVideos
