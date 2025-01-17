/* eslint-disable react/prop-types */
import styles from './styles.module.css'

const CardPokemon = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer} key={pokemon.id}>
      <div className={styles.imageContainer}>
        <img src={pokemon.images.large} alt={pokemon.name} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.label}>
          <h3>{pokemon.name}</h3>
          <span>{pokemon.rarity ? pokemon.rarity : 'Sem informação'}</span>
        </div>
        <div className={styles.infoLabel}>
          <img src={pokemon.set.images.symbol} alt={pokemon.set.name} />
          <span>{pokemon.types[0] ? pokemon.types[0] : 'Sem informação'}</span>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon
