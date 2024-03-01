// import React from 'react';
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl'; // Import Mapbox GL JS
// import mapboxgl from '!mapbox-gl';
// import ReactDOM from 'react-dom';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './index.css';

// import mauiLocations from './mauiLocations.geojson'; // Import data for Maui locations

// const LearnMorePage = () => {
// const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-156.700589);
// const [lat, setLat] = useState(20.816663);
// const [zoom, setZoom] = useState(9);

// ReactDOM.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );

//   // useEffect(() => {
//   //   // Set Mapbox access token from environment variable
//   //   mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

//   //   // Initialize a new map
//   //   const map = new mapboxgl.Map({
//   //     container: 'map',
//   //     style: 'mapbox://styles/mapbox/streets-v9',
//   //     center: [-156.700589, 20.816663], // Initial map center (longitude, latitude)
//   //     zoom: 9, // Initial zoom level
//   //     pitchWithRotate: false,
//   //   });

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     // Add navigation control to the map
//     map.addControl(new mapboxgl.NavigationControl(), 'top-left');

//     // Wait for the map to load
//     map.on('style.load', () => {
//       map.setFog({}); // Set fog effect if needed

//       // Add a GeoJSON source and a layer for Maui locations
//       map.addSource('mauiLocations', {
//         type: 'geojson',
//         data: './mauiLocations.geojson', // GeoJSON data for Maui locations
//       });

//       // Load custom marker image
//       map.loadImage(
//         'https://raw.githubusercontent.com/robinahunter/maui-fountain-images/main/water-drop-shadow-maui.png',
//         (error, image) => {
//           if (error) throw error;

//           // Add custom marker image to the map
//           map.addImage('custom-marker', image);

//           // Add a layer for displaying custom markers
//           map.addLayer({
//             id: 'mauiLocations-symbol',
//             type: 'symbol',
//             source: 'mauiLocations',
//             layout: {
//               'icon-image': 'custom-marker',
//               'icon-allow-overlap': true,
//               'icon-size': 0.09,
//             },
//           });

//           // Add a click event listener to the markers
//           map.on('click', 'mauiLocations-symbol', (e) => {
//             const coordinates = e.features[0].geometry.coordinates.slice();
//             const properties = e.features[0].properties;

//             // Construct HTML content for the popup
//             let popupContent = `<h3>${properties.Location}</h3>`;

//             if (properties.Image) {
//               popupContent += `
//                 <div style="max-width: 200px; max-height: 150px; overflow: hidden;">
//                   <img src="${properties.Image}" alt="${properties.Location}" style="width: 100%; height: 100%; object-fit: cover;" />
//                 </div>`;
//             }

//             popupContent += `
//               <p><a href="https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}" target="_blank">Get Directions</a></p>
//               <p>${properties.Type || ''}</p>
//               <p>${properties.Address || ''}, ${properties.City || ''}, ${properties.State || ''}</p>
//               <p>${parseFloat(coordinates[1]).toFixed(2)}, ${parseFloat(coordinates[0]).toFixed(2)}</p>
//               <a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`;

//             // Create and display a popup on the map
//             new mapboxgl.Popup()
//               .setLngLat(coordinates)
//               .setHTML(popupContent)
//               .addTo(map);
//           });
//         },
//       );
//     });

//     return () => map.remove(); // Cleanup function to remove the map
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//     <div ref={mapContainer} className="map-container" />
//     </div>
//     );

// export default LearnMorePage;


import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl'; // Import Mapbox GL JS
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import mauiLocations from './mauiLocations.geojson'; // Import data for Maui locations

const LearnMorePage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = -156.700589;
  const lat = 20.816663;
  const zoom = 9;

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');

      map.current.on('load', () => {
        map.current.setFog({}); // Set fog effect if needed

        map.current.addSource('mauiLocations', {
          type: 'geojson',
          data: mauiLocations // GeoJSON data for Maui locations
        });

        map.current.loadImage(
          'https://raw.githubusercontent.com/robinahunter/maui-fountain-images/main/water-drop-shadow-maui.png',
          (error, image) => {
            if (error) throw error;

            map.current.addImage('custom-marker', image);

            map.current.addLayer({
              id: 'mauiLocations-symbol',
              type: 'symbol',
              source: 'mauiLocations',
              layout: {
                'icon-image': 'custom-marker',
                'icon-allow-overlap': true,
                'icon-size': 0.09
              }
            });

            map.current.on('click', 'mauiLocations-symbol', (e) => {
              const coordinates = e.features[0].geometry.coordinates.slice();
              const properties = e.features[0].properties;

              let popupContent = `<h3>${properties.Location}</h3>`;

              if (properties.Image) {
                popupContent += `
                  <div style="max-width: 200px; max-height: 150px; overflow: hidden;">
                    <img src="${properties.Image}" alt="${properties.Location}" style="width: 100%; height: 100%; object-fit: cover;" />
                  </div>`;
              }

              popupContent += `
                <p><a href="https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}" target="_blank">Get Directions</a></p>
                <p>${properties.Type || ''}</p>
                <p>${properties.Address || ''}, ${properties.City || ''}, ${properties.State || ''}</p>
                <p>${parseFloat(coordinates[1]).toFixed(2)}, ${parseFloat(coordinates[0]).toFixed(2)}</p>
                <a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`;

              new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .addTo(map.current);
            });
          }
        );
      });

      return () => map.current.remove(); // Cleanup function to remove the map
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default LearnMorePage;
