import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
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
  PopupContentContainer,
  PopupInstruction,
  PopupButtonContainer,
  PopupCancelButton,
  PopupConformButton,
} from './styledComponents'

const Header = props => {
  const onClickingLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
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
          <Popup
            modal
            trigger={<LogoutButton type="button">Logout</LogoutButton>}
          >
            {close => (
              <>
                <PopupContentContainer>
                  <PopupInstruction>
                    Are you sure you want to logout?
                  </PopupInstruction>
                  <PopupButtonContainer>
                    <PopupCancelButton type="button" outline onClick={close}>
                      Cancel
                    </PopupCancelButton>
                    <PopupConformButton
                      type="button"
                      onClick={onClickingLogoutButton}
                    >
                      Confirm
                    </PopupConformButton>
                  </PopupButtonContainer>
                </PopupContentContainer>
              </>
            )}
          </Popup>
        </LargeScreenNavMenu>
      </NavContent>
    </NavContainer>
  )
}

export default withRouter(Header)
