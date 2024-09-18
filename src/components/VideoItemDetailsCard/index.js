import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  VideoItem,
  Title,
  VideoViewsAndTime,
  ViewsItem,
  ThumbsUpIcon,
  ThumbsDownIcon,
  SavePlusIcon,
  VideoDetailsContainer,
  InteractionButtonsContainer,
  InteractionButton,
  InteractionButtonText,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelTextContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  VideoPlayer,
} from './styledComponents'
import './index.css'

const VideoItemDetailsCard = props => {
  const {
    VideoItemCardDetails,
    clickingLikeButton,
    clickingDisLikeButton,
    isLiked,
    isDisliked,
  } = props
  const {
    videoUrl,
    title,
    viewCount,
    publishedAt,
    channelName,
    channelProfileImageUrl,
    subscriberCount,
    description,
  } = VideoItemCardDetails

  const parsedDate = new Date(publishedAt)
  const isValidDate = parsedDate.getTime()

  const publishedTime = isValidDate
    ? formatDistanceToNow(parsedDate)
    : 'Invalid date'

  const likeBtnClass = isLiked ? 'active-btn' : 'inactive-btn'
  const dislikeBtnClass = isDisliked ? 'active-btn' : 'inactive-btn'

  const onClickLikeButton = () => {
    clickingLikeButton()
  }
  const onClickDislikeButton = () => {
    clickingDisLikeButton()
  }

  return (
    <VideoItem>
      <VideoPlayer>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </VideoPlayer>
      <Title>{title}</Title>
      <VideoDetailsContainer>
        <VideoViewsAndTime>
          <ViewsItem views>{viewCount} views</ViewsItem>
          <ViewsItem>{publishedTime} ago</ViewsItem>
        </VideoViewsAndTime>
        <InteractionButtonsContainer>
          <InteractionButton
            type="button"
            onClick={onClickLikeButton}
            className={`${likeBtnClass}`}
          >
            <ThumbsUpIcon />
            <InteractionButtonText>Like</InteractionButtonText>
          </InteractionButton>
          <InteractionButton
            type="button"
            onClick={onClickDislikeButton}
            className={`${dislikeBtnClass}`}
          >
            <ThumbsDownIcon />
            <InteractionButtonText>Dislike</InteractionButtonText>
          </InteractionButton>
          <InteractionButton type="button">
            <SavePlusIcon />
            <InteractionButtonText>Save</InteractionButtonText>
          </InteractionButton>
        </InteractionButtonsContainer>
      </VideoDetailsContainer>
      <hr />
      <ChannelDetailsContainer>
        <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />
        <ChannelTextContainer>
          <ChannelName>{channelName}</ChannelName>
          <ChannelSubscribers>{subscriberCount} subscribers</ChannelSubscribers>
        </ChannelTextContainer>
      </ChannelDetailsContainer>
      <ChannelDescription>{description}</ChannelDescription>
    </VideoItem>
  )
  //   <ThemeAndSaveContext.Consumer>
  //       {
  //           value=>{

  //           }
  //       }
  //   </ThemeAndSaveContext.Consumer>
}

export default VideoItemDetailsCard
