import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import {
  TrendingHeaderContainer,
  TrendingIcon,
  TrendingText,
  SideBarTrendingContainer,
  TrendingContainer,
  TrendingVideoImageContainer,
  TrendingVideoContentContainer,
} from './styledComponents'

class TrendingVideos extends Component {
  state = {
    TrendingVideosData: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({TrendingVideosData: updatedData})
    }
  }

  renderVideoCard = () => {
    const {TrendingVideosData} = this.state
    return (
      <TrendingVideoImageContainer>
        {TrendingVideosData.map(eachVideo => (
          <VideoCard VideoCardDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideoImageContainer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer data-testid="trending">
          <SideBarTrendingContainer>
            <SideBar />
          </SideBarTrendingContainer>
          <TrendingVideoContentContainer>
            <TrendingHeaderContainer>
              <TrendingIcon />
              <TrendingText>Trending</TrendingText>
            </TrendingHeaderContainer>
            {this.renderVideoCard()}
          </TrendingVideoContentContainer>
        </TrendingContainer>
      </>
    )
  }
}

export default TrendingVideos
