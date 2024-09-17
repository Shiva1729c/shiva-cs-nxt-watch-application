import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundImage,
  SideBarTrendingContainer,
  TrendingContainer,
  TrendingVideoContentContainer,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <SideBarTrendingContainer>
            <SideBar />
          </SideBarTrendingContainer>
          <TrendingVideoContentContainer>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <NotFoundHeading>Page Not Found</NotFoundHeading>
            <NotFoundDescription as="p">
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </TrendingVideoContentContainer>
        </TrendingContainer>
      </>
    )
  }
}

export default NotFound
