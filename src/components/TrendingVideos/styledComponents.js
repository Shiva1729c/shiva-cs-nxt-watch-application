import styled from 'styled-components'
import {BsFire} from 'react-icons/bs'

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

export const TrendingIcon = styled(BsFire)`
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
export const FailureContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #212121;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  text-align: center;
`
export const FailureRetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`
