import Image from 'next/image';
import styles from './header.module.css';
import Nav from '../navbar/Nav';
import img from '../../../public/dzfoodsotre-transformed.jpeg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={img}  // Mis à jour pour utiliser une image locale
        alt="Nourriture délicieuse"
        fill={true}
        style={{ objectFit: 'cover' }} />
      <Nav />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Découvrez la gastronomie sur roues</h1>
          <p className={styles.subtitle}>Apportant les meilleures saveurs à votre quartier.</p>
          <a href="#product-catalog" className={styles.ctaButton}>Explorez Nos Chariots</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
