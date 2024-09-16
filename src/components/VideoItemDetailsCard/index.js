import {VideoItem, VideoPlayer} from './styledComponents'

const VideoItemDetailsCard = props => {
  const {VideoItemCardDetails} = props
  const {videoUrl} = VideoItemCardDetails

  return (
    <VideoItem>
      <VideoPlayer url={videoUrl} />
    </VideoItem>
  )
}

export default VideoItemDetailsCard
