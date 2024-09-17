import {
  SideBarContainer,
  SideMenu,
  SideBarItem,
  HomeIcon,
  MenuText,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  ContactInformation,
  ContactText,
  MediaLogosContainer,
  SocialMediaImage,
  ContactInfoDescription,
  PageLink,
} from './styledComponents'

const SideBar = () => {
  const renderSideMenu = () => (
    <SideMenu>
      <PageLink to="/">
        <SideBarItem>
          <HomeIcon />
          <MenuText>Home</MenuText>
        </SideBarItem>
      </PageLink>
      <PageLink to="/trending">
        <SideBarItem>
          <TrendingIcon />
          <MenuText>Trending</MenuText>
        </SideBarItem>
      </PageLink>
      <PageLink to="/gaming">
        <SideBarItem>
          <GamingIcon />
          <MenuText>Gaming</MenuText>
        </SideBarItem>
      </PageLink>
      <PageLink to="/saved-videos">
        <SideBarItem>
          <SavedVideosIcon />
          <MenuText>Saved videos</MenuText>
        </SideBarItem>
      </PageLink>
    </SideMenu>
  )

  const renderContactInformation = () => (
    <ContactInformation>
      <ContactText>CONTACT US</ContactText>
      <MediaLogosContainer>
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </MediaLogosContainer>
      <ContactInfoDescription>
        Enjoy! Now to see your channels and recommendations!
      </ContactInfoDescription>
    </ContactInformation>
  )

  return (
    <SideBarContainer>
      {renderSideMenu()}
      {renderContactInformation()}
    </SideBarContainer>
  )
}

export default SideBar
