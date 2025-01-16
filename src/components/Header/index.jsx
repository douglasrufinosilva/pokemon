import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.img} src="/path284.png" />
        <span className={styles.text}>Documentação</span>
      </div>
    </header>
  )
}

export default Header
