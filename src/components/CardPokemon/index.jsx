import styles from './styles.module.css'

const CardPokemon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.label}>
          <h3>Bulbasaur</h3>
          <p>Tipo planta</p>
        </div>
        <div className={styles.infoLabel}>
          <img src="/iconPlanta.png" alt="" />
          <span>Raro</span>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon
