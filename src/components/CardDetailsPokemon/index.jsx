import styles from './styles.module.css'

const CardDetailsPokemon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <span>Nome</span>
        <span>Nivel</span>
        <span>Hp</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.imgContainer}>
          <img src="/logo.svg" alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.badge}>
            <span>tipo</span>
            <span>forma</span>
          </div>

          <div className={styles.hability}>
            <div className={styles.infoContainer}>
              <span className={styles.titleHability}>info</span>
              <span>info</span>
            </div>
            <div className={styles.infoContainer}>
              <span className={styles.titleHability}>info</span>
              <span>info</span>
            </div>
            <div className={styles.infoContainer}>
              <span className={styles.titleHability}>info</span>
              <span>info</span>
            </div>
          </div>

          <div className={styles.habilityDetails}>
            <span>Habilidade</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque a
              magnam totam repellendus placeat ad, temporibus incidunt quae!
              Porro harum voluptas perferendis atque vel eveniet consequuntur
              voluptates! Dicta, asperiores rerum!
            </p>
          </div>

          <div className={styles.cardNumber}>
            <span>Numero da carta</span>
          </div>

          <div className={styles.cardFooter}>
            <button className={styles.btnClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsPokemon
