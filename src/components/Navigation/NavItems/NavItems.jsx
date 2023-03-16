import { NavLink } from 'react-router-dom'
import styles from './navItems.module.scss'
import { v4 as uuidv4 } from 'uuid'

const NavItems = ({ items, title, sprite }) => {
  return (
    <div className={styles.NavItems}>
      <h2 className={styles.navItemsTitle}>{title}</h2>
      <ul className={styles.NavItemsList}>
        {items.map((item) => {
          return (
            <li key={uuidv4()} className={styles.navItemsItem}>
              {item.title === 'Home' ? (
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                  }
                >
                  <svg className={styles.navItemsLogo}>
                    <use xlinkHref={`${sprite}#${item.title} `} />
                  </svg>
                  {item.title}
                </NavLink>
              ) : (
                <NavLink
                  to={item.title}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                  }
                >
                  <svg className={styles.navItemsLogo}>
                    <use xlinkHref={`${sprite}#${item.title} `} />
                  </svg>{' '}
                  {item.title}
                </NavLink>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavItems
