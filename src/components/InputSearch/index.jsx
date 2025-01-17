import styles from './styles.module.css'

const InputSearch = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='Pesquise um pokemon' />
      <div>
        <img src='/searchIcon.svg' />
      </div>
    </div>
  )
}

export default InputSearch