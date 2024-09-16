import {
  GamingVideoCardItem,
  ThumbnailVideoImage,
  Title,
  VideoLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {GamingVideoCardDetails} = props
  const {id, thumbnailUrl, title, viewCount} = GamingVideoCardDetails

  return (
    <VideoLink to={`/videos/${id}`}>
      <GamingVideoCardItem>
        <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
        <Title>{title}</Title>
        <Title viewsCount>{viewCount} Watching WorldWide</Title>
      </GamingVideoCardItem>
    </VideoLink>
  )
}

export default GamingVideoCard
