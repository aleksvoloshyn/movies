import { useState } from 'react'
import styles from './stylizationMod.module.scss'

const StylizationMod = ({ colors }) => {
  const [bgc, setBgc] = useState('white')

  return (
    <>
      <h2 className={styles.moduleTitle}>Module CSS </h2>
      <ul className={styles.moduleList}>
        {colors.map((color, ind) => {
          return (
            <li
              className={styles.moduleItem}
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
      <div className={[styles.modulePalette, bgc].join(' ')}></div>
    </>
  )
}

export default StylizationMod
