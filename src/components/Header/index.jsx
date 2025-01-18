import styles from './styles.module.css'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button onClick={scrollToTop}>
          <img className={styles.img} src="/logo.svg" />
        </button>
        <span className={styles.text}>Documentação</span>
      </div>
    </header>
  )
}

export default Header
