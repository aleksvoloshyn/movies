import { useState } from 'react'
import {
  StyledTitle,
  StyledList,
  StyledItem,
  StyledPalette,
} from './styledComponents'

const StylizationStyled = ({ colors }) => {
  const [bgc, setBgc] = useState('white')

  return (
    <>
      <StyledTitle>Styled Components </StyledTitle>
      <StyledList>
        {colors.map((color, ind) => {
          return (
            <StyledItem
              key={ind}
              onClick={(e) => {
                setBgc(e.target.innerText)
              }}
            >
              {color}
            </StyledItem>
          )
        })}
      </StyledList>
      <StyledPalette bgcolor={bgc}></StyledPalette>
    </>
  )
}

export default StylizationStyled
