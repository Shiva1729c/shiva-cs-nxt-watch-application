import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
import {
  HomeContainer,
  HomeBannerContainer,
  WebsiteBannerLogo,
  BannerText,
  GetNowButton,
  CloseButton,
  CloseIcon,
  BannerContent,
  VideoCardContainer,
  SearchInputContainer,
  SearchInputElement,
  SearchIcon,
  IconContainer,
  VideoImageContainer,
  HomeContent,
  SideBarHomeContainer,
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

class Home extends Component {
  state = {
    closeBanner: false,
    videosData: [],
    apiStatus: apiConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.in_Progress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({videosData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  closeBanner = () => {
    this.setState({closeBanner: true})
  }

  renderHomeBanner = () => (
    <HomeBannerContainer>
      <BannerContent>
        <WebsiteBannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetNowButton type="button">GET IT NOW</GetNowButton>
      </BannerContent>
      <CloseButton type="button" onClick={this.closeBanner} data-testid="close">
        <CloseIcon />
      </CloseButton>
    </HomeBannerContainer>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideos()
      this.setState({searchInput: ''})
    }
  }

  onClickSearchIcon = () => {
    this.getVideos()
  }

  renderRandomWordSearch = () => (
    <FailureContentContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
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

  renderInputSearch = () => {
    const {searchInput} = this.state
    return (
      <SearchInputContainer>
        <SearchInputElement
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          onKeyDown={this.onSearchEnterKey}
        />
        <IconContainer onClick={this.onClickSearchIcon}>
          <SearchIcon />
        </IconContainer>
      </SearchInputContainer>
    )
  }

  renderVideoCard = () => {
    const {videosData} = this.state

    if (videosData.length === 0) {
      return this.renderRandomWordSearch()
    }
    return (
      <VideoImageContainer>
        {videosData.map(eachVideo => (
          <VideoCard VideoCardDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideoImageContainer>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  //
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
    const {closeBanner} = this.state
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          <SideBarHomeContainer>
            <SideBar />
          </SideBarHomeContainer>
          <HomeContent>
            {!closeBanner && this.renderHomeBanner()}
            <VideoCardContainer>
              {this.renderInputSearch()}
              {this.renderApiStatus()}
            </VideoCardContainer>
          </HomeContent>
        </HomeContainer>
      </>
    )
  }
}

export default Home
