import styles from './styles.module.css'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useContext, useState } from 'react'

const InputSearch = () => {
  const [inputValue, setInputValue] = useState('')

  const { changeFilter } = useContext(PokemonContext)

  const handleSearch = () => {
    changeFilter(inputValue)
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Pesquise um pokemon"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src="/searchIcon.svg" />
      </button>
    </div>
  )
}

export default InputSearch
