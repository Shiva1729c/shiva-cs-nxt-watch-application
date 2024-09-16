import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoCardItem = styled.li`
  width: 320px;
  margin: 10px;
  margin-left: 0px;
`

export const ThumbnailVideoImage = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.viewsCount ? '#616e7c' : '#212121')};
`
