import { useState } from 'react'

let variants = {
  width: '100%',
  height: '30px',
  fontSize: '28px',
}

const StylizationInline = ({ colors }) => {
  const [bgc, setBgc] = useState('white')

  return (
    <>
      <h2 style={{ fontWeight: 900, textAlign: 'center' }}>Inline styles</h2>
      <ul
        style={{
          display: 'flex',

          justifyContent: 'space-between',
        }}
      >
        {colors.map((color, ind) => {
          return (
            <li
              style={{ cursor: 'pointer' }}
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
      <div style={{ ...variants, backgroundColor: [bgc] }}></div>
    </>
  )
}

export default StylizationInline
