import styles from './styles.module.css'

const CardDetailsPokemon = ({ pokemon, handleClose }) => {
  const { name, hp, images, artist, rarity, supertype, tcgplayer, flavorText } =
    pokemon

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <span>{name}</span>
        <span>Hp: {hp}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.imgContainer}>
          <img
            className={images?.large ? styles.hasImage : styles.hasNoImage}
            src={images?.large || '/naodisponivel.png'}
            alt={`Imagem do ${name}`}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.badge}>
            {artist && <span>{artist}</span>}
            {rarity && <span>{rarity}</span>}
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <span className={styles.infoTitle}>Supertipo</span>
              <span>{supertype || 'Não especificado'}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.infoTitle}>Raridade</span>
              <span>{rarity || 'Desconhecida'}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.infoTitle}>Artista</span>
              <span>{artist || 'Desconhecido'}</span>
            </div>
          </div>

          <div className={styles.description}>
            <span>Descrição</span>
            <p>{flavorText || 'Descrição não disponível.'}</p>
          </div>

          <div
            className={`${styles.linkBuyCard} ${
              tcgplayer?.url ? styles.hasLink : styles.hasNoLink
            }`}
          >
            {tcgplayer?.url ? (
              <a href={tcgplayer.url} target="_blank" rel="noreferrer noopener">
                Adquirir carta
              </a>
            ) : (
              <span>Link para compra indisponível</span>
            )}
          </div>

          <div className={styles.cardFooter}>
            <button onClick={handleClose} className={styles.btnClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsPokemon
