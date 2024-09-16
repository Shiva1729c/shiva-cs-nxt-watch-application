import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItem,
  Title,
  VideoViewsAndTime,
  ViewsItem,
} from './styledComponents'

const VideoItemDetailsCard = props => {
  const {VideoItemCardDetails} = props
  const {videoUrl, title, viewCount, publishedAt} = VideoItemCardDetails

  // Check if publishedAt is valid before parsing
  const parsedDate = new Date(publishedAt)
  const isValidDate = parsedDate.getTime()

  const publishedTime = isValidDate
    ? formatDistanceToNow(parsedDate)
    : 'Invalid date'

  return (
    <VideoItem>
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      <Title>{title}</Title>
      <VideoViewsAndTime>
        <ViewsItem views>{viewCount}</ViewsItem>
        <ViewsItem>{publishedTime} ago</ViewsItem>
      </VideoViewsAndTime>
    </VideoItem>
  )
}

export default VideoItemDetailsCard
