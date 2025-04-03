import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import NavBar from '../compontes/NavBar';
import Conteudo from '../compontes/Conteudo';

gsap.registerPlugin(TextPlugin);

function MainPage(){
return(
    <div className="teste-dois-container">
      
    <NavBar/>

    {/* Conteúdo principal */}
    <div className="content-wrapper">
      {/* Vídeo de fundo com gradiente de transição */}
      <div className="video-section">
        <video autoPlay loop muted className="video">
          <source src={video1} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div className="video-gradient"></div>

        </div>

    </div>

    <Conteudo/>
  </div>

)
}

export default MainPage;