import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  TrendingHeaderContainer,
  TrendingIcon,
  TrendingText,
  SideBarTrendingContainer,
  TrendingContainer,
  TrendingVideoContentContainer,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <Header />
        <TrendingContainer data-testid="savedVideos">
          <SideBarTrendingContainer>
            <SideBar />
          </SideBarTrendingContainer>
          <TrendingVideoContentContainer>
            <TrendingHeaderContainer>
              <TrendingIcon />
              <TrendingText>Saved Videos</TrendingText>
            </TrendingHeaderContainer>
          </TrendingVideoContentContainer>
        </TrendingContainer>
      </>
    )
  }
}

export default SavedVideos
