import styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

export const HomeContainer = styled.div`
  background-color: green;
  min-height: 100vh;
`
export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
`

export const WebsiteBannerLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #0f0f0f;
  font-weight: 400;
`
export const GetNowButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #1e293b;
  border: 2px solid #1e293b;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
`
export const CloseButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  margin-bottom: auto;
`

export const CloseIcon = styled(IoIosClose)`
  width: 40px;
  height: 40px;
`
export const BannerContent = styled.div``
export const VideoCardContainer = styled.div`
  background-color: #ebebeb;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
`
export const SearchInputContainer = styled.div`
  border: 1px solid #616e7c;
  width: 350px;
  height: 50px;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const SearchInputElement = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  font-family: 'Roboto';
  padding-left: 10px;
  border-right: 2px solid #616e7c;
  width: 400px;
`
export const IconContainer = styled.div`
  background-color: transparent;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #616e7c;
`
export const SearchIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;
`
export const VideoImageContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  border: 1px solid red;
`
