// import { useNavigate } from 'react-router-dom'
import PanelComp from './PanelComp/PanelComp'
import BoardComp from './Board/BoardComp'

import { Container, Wrapper } from './cv.styled'

const Cv = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <PanelComp />
          <BoardComp />
        </Wrapper>
      </Container>
    </>
  )
}

export default Cv
