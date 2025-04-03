import styles from "./CardsNegocios.module.css"


function CardsNegocios(){
 return(
    <div>
     <div>
        <h1>NEGÓCIOS</h1>
     </div>

     <div>
        <img src={cultura} alt="foto de cultura"/>
        <h2>PRODUTORES CULTURAIS</h2>
     </div>

     <div>
        <img src={publico} alt="foto de publico"/>
        <h2>Público GERAL</h2>
     </div>
    </div>
 )
}

export default CardsNegocios;