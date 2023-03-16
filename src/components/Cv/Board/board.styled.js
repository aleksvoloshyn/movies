import styled from 'styled-components'

const screens = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
}

export const Header = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #373741;
  height: 200px;
  margin-bottom: 16px;
`

export const NameTitle = styled.h1`
  color: #e1d8cf;
  font-size: 28px;
  display: grid;
  justify-content: center;
  @media screen and (min-width: ${screens.tablet}) {
    font-size: 40px;
    text-align: center;
  }
`
export const ProfTitle = styled.h2`
  color: #ffffff;
  display: grid;
  justify-content: center;
  font-size: 22px;
`

// *************BOARD*************
export const Board = styled.div`
  /* display: grid; */
`
export const BoardSection = styled.section`
  color: #373741;
  width: 90%;
  margin: 0 auto;
`
export const BoardHeader = styled.div`
  color: #e1d8cf;
  padding: 16px;
  background-color: #373741;
  font-size: 22px;
  text-align: center;
`
// for summary
export const BoardItems = styled.ul`
  font-size: 14px;
  padding: 16px;
  padding-left: 44px;
  line-height: 1.6;
  @media screen and (min-width: ${screens.tablet}) {
    font-size: 20px;
  }
`
export const BoardItem = styled.li``

// for cards
export const BoardCardItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 96%;
  @media screen and (min-width: ${screens.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const BoardCardItem = styled.div`
  height: 500px;
  cursor: pointer;
`
export const BoardCardDescription = styled.div`
  /* outline: 1px solid lavender; */
`
export const BoardItemLink = styled.a`
  color: #373741;
`
export const BoardImage = styled.img`
  width: 100%;
  opacity: 60%;
`
