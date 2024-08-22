import React from 'react';
import './globals.css'; // Importez la feuille de style spécifique

const ProductCatalog = () => {
  return (
    <section id="product-catalog" className="catalogSection">
      <div className="catalogContainer">
        <h2 className="catalogTitle">Nos Chariots</h2>
        <p className="catalogIntro">
          Découvrez notre gamme de chariots alimentaires et leurs menus. Personnalisez votre chariot selon vos besoins.
        </p>
        
        <div className="cartCardContainer">
          <div className="cartCard">
            <h3 className="cartCardTitle">Chariot Petit</h3>
            <p className="cartCardDetails"><strong>Détails :</strong> Compact et idéal pour les petits événements.</p>
            <ul className="cartCardMenu">
              <li>Menu 1: Sandwichs, Salades</li>
              <li>Menu 2: Boissons, Desserts</li>
            </ul>
          </div>
          
          <div className="cartCard">
            <h3 className="cartCardTitle">Chariot Moyen</h3>
            <p className="cartCardDetails"><strong>Détails :</strong> Polyvalent pour des événements de taille moyenne.</p>
            <ul className="cartCardMenu">
              <li>Menu 1: Burgers, Frites</li>
              <li>Menu 2: Boissons, Glaces</li>
            </ul>
          </div>
          
          <div className="cartCard">
            <h3 className="cartCardTitle">Chariot Grand</h3>
            <p className="cartCardDetails"><strong>Détails :</strong> Spacieux pour les grands événements.</p>
            <ul className="cartCardMenu">
              <li>Menu 1: Plats chauds, Accompagnements</li>
              <li>Menu 2: Boissons, Desserts variés</li>
            </ul>
          </div>
          
          <div className="cartCard">
            <h3 className="cartCardTitle">Chariot Gourmet</h3>
            <p className="cartCardDetails"><strong>Détails :</strong> Chariot haut de gamme avec options de menu variées.</p>
            <ul className="cartCardMenu">
              <li>Menu 1: Cuisine internationale</li>
              <li>Menu 2: Vins, Cocktails</li>
            </ul>
          </div>
          
          <div className="cartCard">
            <h3 className="cartCardTitle">Chariot Événement</h3>
            <p className="cartCardDetails"><strong>Détails :</strong> Idéal pour les événements spéciaux avec un menu sur mesure.</p>
            <ul className="cartCardMenu">
              <li>Menu 1: Buffet, Plats de choix</li>
              <li>Menu 2: Boissons, Équipements de service</li>
            </ul>
          </div>
          
          <div className="customCartCard">
            <h3 className="customCartTitle">Personnalisez Votre Chariot</h3>
            <p className="customCartDetails">Vous ne trouvez pas ce que vous cherchez ? Personnalisez votre chariot et son menu selon vos besoins !</p>
            <button className="customizeButton">Personnaliser</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
