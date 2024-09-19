import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: pink;
  height: 15vh;
`

export const NavContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`

export const SmallScreenNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  svg {
    font-size: 3vw;
  }

  @media screen and (min-width: 576px) {
    width: 20vw;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeScreenNavMenu = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }
  svg {
    font-size: 3vw;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
`

export const ImageElement = styled.img`
  width: 130px;

  @media screen and (min-width: 576px) {
    width: 110px;
     height: 36px;
  }
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    
  }
  @media screen and (min-width: 992px) {
    // width: 200px;
    // height: 70px;
  }
`

export const ProfileImage = styled.img`
  width: 3vw;
`

export const LogoutButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;

  @media screen and (min-width: 1200px) {
    height: 40px;
    font-size: 20px;
    width: 150px;
  }
`

export const PopupContentContainer = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 160px;
  border-radius: 10px;
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`
export const PopupButtonContainer = styled.div``

export const PopupInstruction = styled.h1`
  font-family: 'Roboto';
  color: #00306e;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`

export const PopupConformButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? '#616e7c' : '#ffffff')};
  border: 1px solid ${props => (props.outline ? '#606060' : '#3b82f6')};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
`
export const PopupCancelButton = styled(PopupConformButton)`
  margin-right: 10px;
`
