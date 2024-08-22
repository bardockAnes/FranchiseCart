'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS
import './globals.css'; // Import the separated CSS file
import L from 'leaflet'; // Import Leaflet for custom marker creation

// Center of the map (Alger Center)
const center = {
  lat: 36.7528,
  lng: 3.0588,
};

// Sample locations across Alger with random names
const locations = [
  { lat: 36.7528, lng: 3.0588, title: 'Ahmed Carotis' },
  { lat: 36.7518, lng: 3.0598, title: 'Omar Carotis' },
  { lat: 36.7538, lng: 3.0608, title: 'Samir Carotis' },
  { lat: 36.7548, lng: 3.0618, title: 'Nadir Carotis' },
  { lat: 36.7558, lng: 3.0628, title: 'Karim Carotis' },
];

// Function to create a custom icon with the cart owner's name
const createCustomIcon = (title: string) => {
  return L.divIcon({
    html: `<div class="custom-marker">${title}</div>`,
    className: '', // Use a custom class for styling
    iconSize: [100, 40], // Size of the marker
    iconAnchor: [50, 20], // Positioning of the marker
  });
};

const CartLocator = () => {
  return (
    <section id="cart-locator" className="locatorSection">
      <div className="locatorContainer">
        <h2 className="locatorTitle">Trouvez un Chariot Près de Chez Vous</h2>
        <p className="locatorDescription">
          Utilisez notre carte interactive pour localiser nos chariots alimentaires dans votre région.
        </p>

        <div className="mapContainer">
          <MapContainer center={center} zoom={15} className="leafletMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={createCustomIcon(location.title)}
              >
                <Popup>{location.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="locatorCallToAction">
          <p className="ctaText">
            Vous pouvez également nous contacter pour obtenir plus d&aposinformations sur nos emplacements ou pour toute autre question.
          </p>
          <a href="/contact" className="ctaButton">Nous Contacter</a>
        </div>
      </div>
    </section>
  );
};

export default CartLocator;
