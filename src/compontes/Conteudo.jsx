import styles from "./Conteudo.module.css";
import cartaz from "../assets/cartaz.jpg";
import Cards from "./Cards";

function Conteudo(){
    return(
        <>
       <div className={styles.texto}>
        <h1>UM NOVO MODO DE PRODUZIR CONTEÚDOS CINEMATOGRÁFICOS.</h1>
       </div>

       <div className={styles.container}>
        <div className={styles.cartaz}>
          <img src={cartaz} alt="Cartaz do Filme" />
        </div>

        <div className={styles.textos}>
          <h1>Produtora <br/> Cinematográfica</h1>
          <p>A selo atua como uma produtora, permanecendo oportunidades para criadores realizarem sua obra dentro da mais alta qualidade técnica e criativa. Experiencia toda a qualidades da Selo.</p>
          <h1>Co-produtora <br/> Cinematográfica</h1>
          <p>A selo trabalho junto a produtoras, podendo atuar em todas as áreas de produção. Compartilhando a qualidade técnica e criativa e ampliando o trabalho coletivo. </p>
        </div>
      </div>

      <Cards/>
        </>
    )
}

export default Conteudo;