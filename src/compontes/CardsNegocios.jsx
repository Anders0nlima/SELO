import styles from "./CardsNegocios.module.css";
import cultural from "../assets/cultural.jpg"
import publico from "../assets/publico.jpg"

function CardsNegocios() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NEGÓCIOS</h1>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <img src={cultural} alt="foto de cultura" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>PRODUTORES CULTURAIS</h2>
            <a href="#saibamais" className={styles.button}>Saiba Mais</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src={publico} alt="foto de publico" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>PÚBLICO GERAL</h2>
            <a href="#saibamais" className={styles.button}>Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsNegocios;