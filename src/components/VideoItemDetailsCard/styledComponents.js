import styled from 'styled-components'

export const VideoItem = styled.div`
  //   border: 1px solid red;
  height: 250px;
  @media screen and (min-width: 576px) {
    height: 300px;
  }
  @media screen and (min-width: 780px) {
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    height: 100%;
  }
`

// export const VideoPlayer = styled(ReactPlayer)`
//   width: 100%;
// `

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #212121;
`

export const VideoViewsAndTime = styled.ul`
  padding-left: 0px;
  display: flex;
`

export const ViewsItem = styled.li`
  margin-right: 30px;
  font-size: 14px;
  font-family: 'Roboto';
  color: #64748b;
  list-style-type: ${props => (props.views ? 'none' : 'disc')};
`
