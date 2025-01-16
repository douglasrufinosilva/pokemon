import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.img} src="/logo.svg" />
        <span className={styles.text}>Documentação</span>
      </div>
    </header>
  )
}

export default Header
