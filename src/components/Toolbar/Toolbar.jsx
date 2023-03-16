import Searchbar from './Searchbar'
import Tools from './Tools/Tools'
import styles from './toolbar.module.scss'

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Searchbar />
      <Tools />
    </div>
  )
}

export default Toolbar
