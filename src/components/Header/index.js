import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {
  NavContainer,
  NavContent,
  ImageElement,
  SmallScreenNavMenu,
  LargeScreenNavMenu,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = () => (
  <NavContainer>
    <NavContent>
      <ImageElement
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <SmallScreenNavMenu>
        <FaMoon />
        <GiHamburgerMenu />
        <FiLogOut />
      </SmallScreenNavMenu>
      <LargeScreenNavMenu>
        <FaMoon />
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />

        <LogoutButton type="button">Logout</LogoutButton>
      </LargeScreenNavMenu>
    </NavContent>
  </NavContainer>
)

export default Header
