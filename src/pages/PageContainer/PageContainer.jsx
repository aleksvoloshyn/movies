import styles from './pageContainer.module.scss'

const PageContainer = ({ children }) => {
  return <div className={styles.pageContainer}>{children}</div>
}

export default PageContainer
