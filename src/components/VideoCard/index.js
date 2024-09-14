import {
  VideoCardItem,
  ThumbnailVideoImage,
  ProfileImageContainer,
  ProfileImage,
  Title,
  ProfileViewsContainer,
  ViewsItem,
  ChannelName,
  ChannelContainer,
} from './styledComponents'

const VideoCard = props => {
  const {VideoCardDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
  } = VideoCardDetails

  return (
    <VideoCardItem>
      <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ProfileImageContainer>
        <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
        <Title>{title}</Title>
      </ProfileImageContainer>
      <ChannelContainer>
        <ChannelName>{channelName}</ChannelName>
        <ProfileViewsContainer>
          <ViewsItem>{viewCount}</ViewsItem>
          <ViewsItem>{publishedAt}</ViewsItem>
        </ProfileViewsContainer>
      </ChannelContainer>
    </VideoCardItem>
  )
}

export default VideoCard
