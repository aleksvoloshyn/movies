import Toolbar from './../../components/Toolbar/Toolbar'
import styles from './home.module.scss'

const home = () => {
  return (
    <>
      <Toolbar />
      <h2 className={styles.title}>HOME PAGE </h2>
      <p className={styles.text}>
        Alex's Voloshyn training dashboard for some apps, made with REACT JS
      </p>
    </>
  )
}

export default home
