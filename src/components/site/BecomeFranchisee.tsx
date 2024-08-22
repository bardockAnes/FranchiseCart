import React from 'react';
import './globals.css'; // Importez la feuille de style spécifique

const BecomeFranchisee = () => {
  return (
    <section id="become-franchisee" className="franchiseeSection">
      <div className="franchiseeContainer">
        <h2 className="franchiseeTitle">Devenez Franchisé</h2>
        <p className="franchiseeDescription">
          Vous souhaitez rejoindre notre réseau de franchises ? Découvrez nos critères de sélection et le processus de candidature.
        </p>
        
        <div className="franchiseeContent">
          <div className="franchiseeInfo">
            <h3 className="infoTitle">Pourquoi Devenir Franchisé ?</h3>
            <p className="infoText">
              Rejoindre notre réseau vous offre des avantages uniques, y compris un soutien continu, une marque reconnue et des opportunités de croissance. Nous nous engageons à votre succès avec une formation complète et un accompagnement personnalisé.
            </p>
          </div>

          <div className="franchiseeSteps">
            <h3 className="stepsTitle">Le Processus de Candidature</h3>
            <ol className="stepsList">
              <li> Remplissez le formulaire de pré-sélection en ligne.</li>
              <li> Nous examinerons votre candidature et vous contacterons.</li>
              <li> Passez un entretien avec notre équipe de franchise.</li>
              <li> Recevez une proposition de franchise et finalisez les accords.</li>
              <li> Commencez votre aventure avec notre marque !</li>
            </ol>
          </div>
        </div>
        
        <a href="/apply" className="applyButton">Postuler Maintenant</a>
      </div>
    </section>
  );
};

export default BecomeFranchisee;
