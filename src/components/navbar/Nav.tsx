import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Escale Française</a>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#product-catalog">Our Carts</a></li>
        <li><a href="#become-franchisee">Franchise</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
