import styled from 'styled-components'
import {TiHome} from 'react-icons/ti'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const SideBarContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   border: 1px solid red;
`
export const SideMenu = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
`

export const HomeIcon = styled(TiHome)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
`
export const TrendingIcon = styled(BsFire)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
`
export const GamingIcon = styled(SiYoutubegaming)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
`
export const SavedVideosIcon = styled(BiListPlus)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
`
export const MenuText = styled.p`
  font-family: 'Roboto';
  color: #231f20;
  font-weight: 500;
`
export const ContactInformation = styled.div`
  padding-left: 10px;
`
export const ContactText = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
`
export const MediaLogosContainer = styled.div``
export const SocialMediaImage = styled.img`
  width: 24px;
  margin-right: 10px;
`
export const ContactInfoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 200px;
`
