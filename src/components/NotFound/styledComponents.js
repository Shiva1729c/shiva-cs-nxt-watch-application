import styled from 'styled-components'

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
  //   justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 50%;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #000000;
`
export const NotFoundDescription = styled(NotFoundHeading)`
  color: #64748b;
  font-weight: 400;
  text-align: center;
`
