import styles from "./Cards.module.css";
import animacao from "../assets/animacao.jpg"
import audio from "../assets/audio.jpg"
import filmes from "../assets/filmes.jpg"

function Cards(){
    return(
        <div className={styles.card_container}>
         <div className={styles.card}>
                <img src={animacao} alt="foto de animação" />
                  <div className={styles.card_body}>
                      <h5>Qualidade superior</h5>
                      <p>Qualidade superior para sua produção! Utilize os modelos e suporte da Selo, foque suas energias no que realmente importa e deixa com a gente o trabalho pesado.</p>
                  </div> 
               </div>

         <div className={styles.card}>
                <img src={audio} alt="foto de audio" />
                  <div className={styles.card_body}>
                      <h5>Contato técnico</h5>
                      <p>Destaque-se agora! A selo possue experiência técnica profissional e dedicada ao cliente. Buscando o máximo compromisso de entrega.</p>
                  </div> 
               </div>

         <div className={styles.card}>
                <img src={filmes} alt="foto de filmes" />
                  <div className={styles.card_body}>
                      <h5>Suporte artístico</h5>
                      <p>Torne seus sonhos realidades A selo conta com um arsenal de artistas focados com a inovação e criação para dar vida as obras. </p>
                  </div> 
               </div>
        </div>
    )
}

export default Cards;