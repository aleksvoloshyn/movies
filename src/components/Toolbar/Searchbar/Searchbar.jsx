import styles from './searchbar.module.scss'

import sprite from './../../../images/svg/sprite.svg'

const Searchbar = () => {
  return (
    <div className={styles.searchBar}>
      <label htmlFor={1} className={styles.searchLabel}>
        <svg className={styles.searchLogo}>
          <use xlinkHref={`${sprite}#Search `} />
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search (Ctrl+/)"
          // value={}
          // onChange={}
          name="login"
          id={1}
          //name такой как в стейте
        />
      </label>
    </div>
  )
}

export default Searchbar
