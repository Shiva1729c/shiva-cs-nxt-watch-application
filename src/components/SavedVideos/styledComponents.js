import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

export const TrendingHeaderContainer = styled.div`
  background-color: #ebebeb;
  display: flex;
  padding-left: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: auto;
    min-height: 100px;
    max-height: 150px;
  }
`

export const TrendingIcon = styled(AiFillFire)`
  color: #ff0000;
  background-color: #cbd5e1;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 100%;
  padding: 12px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    padding: 20px;
  }
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`
export const SideBarTrendingContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  min-height: 100vh;
`
export const TrendingVideoImageContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 30px;
  flex-wrap: wrap;
  //   border: 1px solid red;
`
export const TrendingVideoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //   border: 1px solid red;
`
