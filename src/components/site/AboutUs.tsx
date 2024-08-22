import React from 'react';
import './globals.css'; // Importez la feuille de style globale

const AboutUs = () => {
  return (
    <section id="about-us" className="aboutUs">
      <div className="container">
        <h2 className="title">À Propos de Nous</h2>
        <p className="description">
          Bienvenue chez DZ Food ! Nous sommes fiers de vous offrir des repas délicieux au centre d&aposAlger, servis avec le sourire depuis nos chariots aux couleurs de notre marque. Chez nous, la qualité et le goût sont toujours au rendez-vous.
        </p>
        <p className="description">
          Nous grandissons chaque jour et aimons travailler avec des personnes qui veulent se joindre à notre aventure. Si vous souhaitez collaborer avec nous, nous vous offrons des conseils et un soutien pour vous aider à démarrer sous notre nom. Ensemble, nous partagerons les succès et les bénéfices de cette belle aventure.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
