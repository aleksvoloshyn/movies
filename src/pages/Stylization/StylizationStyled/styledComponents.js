import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-weight: 900;
  text-align: center;
  margin-bottom: 12px;
`
const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
`
const StyledItem = styled.li`
  cursor: pointer;
`

const handleColorType = (bgcolor) => {
  switch (bgcolor) {
    case 'tomato':
      return 'tomato'
    case 'red':
      return 'red'
    case 'green':
      return 'green'
    case 'salmon':
      return 'salmon'
    case 'blue':
      return 'blue'
    case 'grey':
      return 'grey'
    case 'pink':
      return 'pink'
    case 'black':
      return 'black'
    case 'purple':
      return 'purple'
    case 'teal':
      return 'teal'
    default:
      return '#fff'
  }
}

const StyledPalette = styled.div`
  width: 100%;
  height: 30px;
  font-size: 28px;
  background: ${({ bgcolor }) => handleColorType(bgcolor)};
`
export { StyledTitle, StyledList, StyledItem, StyledPalette }
