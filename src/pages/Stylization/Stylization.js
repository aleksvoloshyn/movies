import PageContainer from '../PageContainer/PageContainer'
import StylizationInline from './StylizationInline/StylizationInline'
import StylizationVanila from './StylizationVanila'
import StylizationMod from './StylizationMod'
import StylizationStyled from './StylizationStyled'

import './stylization.scss'

const colors = [
  'tomato',
  'red',
  'green',
  'teal',
  'salmon',
  'blue',
  'grey',
  'pink',
  'purple',
  'black',
]

const Stylization = () => {
  return (
    <PageContainer>
      <h2 style={{ textAlign: 'center', marginBottom: 12, color: 'black' }}>
        Click on color title
      </h2>
      <div className="stylizationBlock">
        <StylizationInline colors={colors} />
      </div>
      <div className="stylizationBlock">
        <StylizationVanila colors={colors} />
      </div>
      <div className="stylizationBlock">
        <StylizationMod colors={colors} />
      </div>
      <div className="stylizationBlock">
        <StylizationStyled colors={colors} />
      </div>
    </PageContainer>
  )
}

export default Stylization
