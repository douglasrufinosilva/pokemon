import styles from './styles.module.css'

const InputSearch = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='Pesquise um pokemon' />
      <button>
        <img src='/searchIcon.svg' />
      </button>
    </div>
  )
}

export default InputSearch