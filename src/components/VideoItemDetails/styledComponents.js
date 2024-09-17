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
