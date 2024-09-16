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
  VideoLink,
} from './styledComponents'

const VideoCard = props => {
  const {VideoCardDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
  } = VideoCardDetails

  return (
    <VideoLink to={`/videos/${id}`}>
      <VideoCardItem>
        <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
        <ProfileImageContainer>
          <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
          <Title>{title}</Title>
        </ProfileImageContainer>
        <ChannelContainer>
          <ChannelName>{channelName}</ChannelName>

          <ProfileViewsContainer>
            <ViewsItem views>{viewCount}</ViewsItem>
            <ViewsItem>{publishedAt}</ViewsItem>
          </ProfileViewsContainer>
        </ChannelContainer>
      </VideoCardItem>
    </VideoLink>
  )
}

export default VideoCard
