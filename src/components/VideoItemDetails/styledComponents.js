import styled from 'styled-components'

export const SideBarVideoItemDetailsContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    // border: 1px solid red;
    height: 100%;
  }
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100vh;
  background-color: #f9f9f9;
  //   border: 1px solid red;
`

export const VideoDetailsCardContainer = styled.div`
  //   width: 100vh;

  padding: 20px;
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
