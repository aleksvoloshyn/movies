import { useState } from 'react'

import './stylizationVanila.scss'

const StylizationVanila = ({ colors }) => {
  const [bgc, setBgc] = useState('white')

  return (
    <>
      <h2 className="vanilaTitle">Vanila CSS </h2>
      <ul className="vanilaList">
        {colors.map((color, ind) => {
          return (
            <li
              className="vanilaItem"
              key={ind}
              onClick={(e) => {
                setBgc(e.target.innerText)
              }}
            >
              {color}
            </li>
          )
        })}
      </ul>
      <div className={['vanilaPalette', bgc].join(' ')}></div>
    </>
  )
}

export default StylizationVanila
