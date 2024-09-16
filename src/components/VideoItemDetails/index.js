import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'

import VideoItemDetailsCard from '../VideoItemDetailsCard'

import {
  VideoItemDetailsContainer,
  SideBarVideoItemDetailsContainer,
  VideoDetailsCardContainer,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsData: [],
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(ApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        viewCount: fetchedData.video_details.view_count,
        videoUrl: fetchedData.video_details.video_url,
        description: fetchedData.video_details.description,
        channelName: fetchedData.video_details.channel.name,
        channelProfileImageUrl:
          fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
      }
      this.setState({videoItemDetailsData: updatedData})
    }
  }

  render() {
    const {videoItemDetailsData} = this.state
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <SideBarVideoItemDetailsContainer>
            <SideBar />
          </SideBarVideoItemDetailsContainer>
          <VideoDetailsCardContainer>
            <VideoItemDetailsCard VideoItemCardDetails={videoItemDetailsData} />
          </VideoDetailsCardContainer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
