import {formatDistanceToNow} from 'date-fns'
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

  const parsedDate = new Date(publishedAt)

  const publishedTime = formatDistanceToNow(parsedDate)

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
            <ViewsItem>{publishedTime} ago</ViewsItem>
          </ProfileViewsContainer>
        </ChannelContainer>
      </VideoCardItem>
    </VideoLink>
  )
}

export default VideoCard
