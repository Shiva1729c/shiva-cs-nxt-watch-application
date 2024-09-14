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
    width: 150px;
     height: 40px;
  }
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 40px;
  }
  @media screen and (min-width: 992px) {
    width: 200px;
    height: 70px;
  }
`

export const ProfileImage = styled.img`
  width: 4vw;
`

export const LogoutButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;

  @media screen and (min-width: 1200px) {
    height: 60px;
    font-size: 30px;
    width: 150px;
  }
`
