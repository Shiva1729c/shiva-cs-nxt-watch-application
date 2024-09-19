import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const PageLink = styled(Link)`
  text-decoration: none;
`

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

export const HomeIcon = styled(AiFillHome)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
  color: #383838;
`
export const TrendingIcon = styled(AiFillFire)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
  color: #383838;
`
export const GamingIcon = styled(SiYoutubegaming)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
  color: #383838;
`
export const SavedVideosIcon = styled(CgPlayListAdd)`
  margin-right: 15px;
  margin-left: 10px;
  width: 20px;
  color: #383838;
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
