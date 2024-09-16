import {Component} from 'react'
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
} from './styledComponents'

class GamingVideos extends Component {
  state = {
    GamingVideosData: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
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
      this.setState({GamingVideosData: updatedData})
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

  render() {
    return (
      <>
        <Header />
        <GamingContainer>
          <SideBarGamingContainer>
            <SideBar />
          </SideBarGamingContainer>
          <GamingVideoContentContainer>
            <GamingHeaderContainer>
              <GamingIcon />
              <GamingText>Gaming</GamingText>
            </GamingHeaderContainer>
            {this.renderVideoCard()}
          </GamingVideoContentContainer>
        </GamingContainer>
      </>
    )
  }
}

export default GamingVideos
