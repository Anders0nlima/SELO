import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

import styles from './NavBar.module.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Efeito de scroll no navbar
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 200, 1);
      const backgroundColor = `rgba(0, 0, 0, ${opacity})`;

      navbar.style.backgroundColor = backgroundColor;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`} ref={navbarRef}>
        <button className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <h1 className={styles.logo}>SELO</h1>
        <button className={styles.search_icon}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.menu_overlay}>
          <footer className={styles.menu_footer}>
            <div className={styles.footer_left}>
              <Link to="/sobre" className={styles.menu_list}>Sobre</Link>
              <Link to="/biblioteca" className={styles.menu_list}>Bibliotecas</Link>
              <Link to="/juste-se" className={styles.menu_list}>Junte-se</Link>
              <Link to="/mekpool" className={styles.menu_list}>Mekpool</Link>
            </div>
            <div className={styles.footer_right}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default NavBar;