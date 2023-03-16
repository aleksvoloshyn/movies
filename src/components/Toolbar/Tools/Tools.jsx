import styles from './tools.module.scss'
import sprite from './../../../images/svg/sprite.svg'
import { v4 as uuidv4 } from 'uuid'

const itemKey = uuidv4()

const toolsItems = [
  { id: 2, title: 'Moon' },
  { id: 3, title: 'Grid' },
  { id: 4, title: 'NotificationNo' },

  // { id: 1, title: 'Uaflag' },
  // { id: 5, title: 'Bighead' },
]

const Tools = () => {
  return (
    <div className={styles.tools}>
      <ul className={styles.toolsList}>
        {toolsItems.map((item) => {
          return (
            <li key={uuidv4()} className={styles.toolsListItem}>
              {' '}
              <svg className={styles.toolsIcons}>
                <use xlinkHref={`${sprite}#${item.title} `} />
              </svg>
            </li>
          )
        })}
      </ul>{' '}
      <svg className={styles.toolsBigHead}>
        <use xlinkHref={`${sprite}#Bighead `} />
      </svg>
    </div>
  )
}
export default Tools
