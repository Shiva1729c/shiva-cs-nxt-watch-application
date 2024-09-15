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
} from './styledComponents'

const SideBar = () => {
  const renderSideMenu = () => (
    <SideMenu>
      <SideBarItem>
        <HomeIcon />
        <MenuText>Home</MenuText>
      </SideBarItem>
      <SideBarItem>
        <TrendingIcon />
        <MenuText>Trending</MenuText>
      </SideBarItem>
      <SideBarItem>
        <GamingIcon />
        <MenuText>Gaming</MenuText>
      </SideBarItem>
      <SideBarItem>
        <SavedVideosIcon />
        <MenuText>Saved videos</MenuText>
      </SideBarItem>
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
