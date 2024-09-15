import {Component} from 'react'
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
} from './styledComponents'

class Home extends Component {
  state = {
    closeBanner: false,
    videosData: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
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
      this.setState({videosData: updatedData})
    }
  }

  renderVideoCard = () => {
    const {videosData} = this.state
    return (
      <VideoImageContainer>
        {videosData.map(eachVideo => (
          <VideoCard VideoCardDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideoImageContainer>
    )
  }

  closeBanner = () => {
    this.setState({closeBanner: true})
  }

  renderHomeBanner = () => (
    <HomeBannerContainer>
      <BannerContent>
        <WebsiteBannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetNowButton type="button">GET IT NOW</GetNowButton>
      </BannerContent>
      <CloseButton type="button" onClick={this.closeBanner}>
        <CloseIcon />
      </CloseButton>
    </HomeBannerContainer>
  )

  renderInputSearch = () => {
    const x = false
    return (
      <SearchInputContainer>
        <SearchInputElement type="search" placeholder="Search" />
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </SearchInputContainer>
    )
  }

  render() {
    const {closeBanner} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <SideBarHomeContainer>
            <SideBar />
          </SideBarHomeContainer>
          <HomeContent>
            {!closeBanner && this.renderHomeBanner()}
            <VideoCardContainer>
              {this.renderInputSearch()}
              {this.renderVideoCard()}
            </VideoCardContainer>
          </HomeContent>
        </HomeContainer>
      </>
    )
  }
}

export default Home
