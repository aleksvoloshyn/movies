import MainLogo from './MainLogo'
import NavItems from './NavItems/NavItems'
import { mainItems, reactSt, projects } from '../../data/menuItems'

import sprite from './../../images/svg/sprite.svg'

import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <MainLogo />

      <NavItems items={mainItems} sprite={sprite} />
      <NavItems items={projects} title={'MY APPS'} sprite={sprite} />
      <NavItems items={reactSt} title={'REACT test'} sprite={sprite} />
    </nav>
  )
}

export default Navigation
