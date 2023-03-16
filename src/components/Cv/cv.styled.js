import styled from 'styled-components'

const screens = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
}

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  padding: 12px;
  max-width: 767px;
  font-family: 'Rubik', sans-serif;
  background-color: #ffffff;
  @media screen and (min-width: ${screens.tablet}) {
    min-width: 768px;
  }

  @media screen and (min-width: ${screens.desktop}) {
    min-width: 1280px;
  }
`
export const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 2fr; */
  grid-template-columns: 1fr 2fr;
  gap: 6px;
  @media screen and (min-width: ${screens.tablet}) {
    grid-template-columns: 1fr 2fr;
  }
`
