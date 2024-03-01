// export default function LearnMorePage() {   

//   return (
//       <>
//       <div className="bg-neutral-200 h-screen w-screen">
//           <br />
//           <h1 className='pl-4 text-lg text-center'>Add content here</h1>
//           <br />
//           <h1 className='pl-4 text-lg text-center'></h1>
//           <br />
//           {/* <p className="mx-auto font-light w-[75vw]">More Resources | County of Maui, Department of Water<a href="https://www.mauicounty.gov/QuickLinks.aspx?CID=43#:~:text=watersheds%20are%20drinking%20water%20source,in%20West%20and%20Central%20Maui."><span className="text-pink-300 hover:text-teal-200">Mauicounty.gov/QuickLinks</span></a></p> */}
//       </div>
//       </>
//   )
// }

// import React, { useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import "./mapboxGl.css";
// import mauiLocations from "./mauiLocations.geojson";


// const LearnMorePage = () => {
//   useEffect(() => {

//     mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN; // this variable in your .env file

//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [-156.700589, 20.816663], // lng, lat
//       zoom: 9,
//       pitchWithRotate: false,
//     });

//     map.addControl(new mapboxgl.NavigationControl(), "top-left");

//     map.on("load", () => {
//       map.setFog({});
//       // Load and add the image for custom markers
//       map.loadImage(
//         "https://raw.githubusercontent.com/robinahunter/maui-fountain-images/main/water-drop-shadow-maui.png",
//         (error, image) => {
//           if (error) throw error;

//           map.addImage("custom-marker", image);

//           map.addSource("mauiLocations", {
//             type: "geojson",
//             data: mauiLocations,
//           });

//           map.addLayer({
//             id: "mauiLocations-symbol",
//             type: "symbol",
//             source: "mauiLocations",
//             layout: {
//               "icon-image": "custom-marker",
//               "icon-allow-overlap": true,
//               "icon-size": 0.09,
//             },
//           });

//           map.on("click", "mauiLocations-symbol", (e) => {
//             const coordinates = e.features[0].geometry.coordinates.slice();
//             const properties = e.features[0].properties;

//             let popupContent = `<h3>${properties.Location}</h3>`;

//             if (properties.Image) {
//               popupContent += `
//                                 <div style="max-width: 200px; max-height: 150px; overflow: hidden;">
//                                     <img src="${properties.Image}" alt="${properties.Location}" style="width: 100%; height: 100%; object-fit: cover;" />
//                                 </div>`;
//             }

//             popupContent += `
//                             <p><a href="https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}" target="_blank">Get Directions</a></p>
//                             <p>${properties.Type || ""}</p>
//                             <p>${properties.Address || ""}, ${properties.City || ""}, ${properties.State || ""}</p>
//                             <p>${parseFloat(coordinates[1]).toFixed(2)}, ${parseFloat(coordinates[0]).toFixed(2)}</p>
//                             <a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`;

//             new mapboxgl.Popup()
//               .setLngLat(coordinates)
//               .setHTML(popupContent)
//               .addTo(map);
//           });
//         },
//       );

//       // Clean up function
//       return () => map.remove();
//     });
//   }, []);

//   return <div id="map" style={{ height: "100%", width: "100%", padding: 0, margin: 0 }} />;
// };

// export default LearnMorePage;



// import React, { useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mauiLocations from "./mauiLocations.geojson";

// const LearnMorePage = () => {
//   useEffect(() => {
//     mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN; // this variable in your .env file

//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [-156.700589, 20.816663], // lng, lat
//       zoom: 9,
//       pitchWithRotate: false,
//     });

//     map.addControl(new mapboxgl.NavigationControl(), "top-left");

//     map.on("load", () => {
//       map.setFog({});
//       // Load and add the image for custom markers
//       map.loadImage(
//         "https://raw.githubusercontent.com/robinahunter/maui-fountain-images/main/water-drop-shadow-maui.png",
//         (error, image) => {
//           if (error) throw error;

//           map.addImage("custom-marker", image);

//           map.addSource("mauiLocations", {
//             type: "geojson",
//             data: mauiLocations, 
//           });

//           map.addLayer({
//             id: "mauiLocations-symbol",
//             type: "symbol",
//             source: "mauiLocations",
//             layout: {
//               "icon-image": "custom-marker",
//               "icon-allow-overlap": true,
//               "icon-size": 0.09,
//             },
//           });

//           map.on("click", "mauiLocations-symbol", (e) => {
//             if (!e.features || !e.features.length) return;
        
//             const coordinates = e.features[0].geometry.coordinates.slice();
//             const properties = e.features[0].properties;
        
//             let popupContent = `<h3>${properties.Location}</h3>`;
        
//             if (properties.Image) {
//                 popupContent += `
//                     <div style="max-width: 200px; max-height: 150px; overflow: hidden;">
//                         <img src="${properties.Image}" alt="${properties.Location}" style="width: 100%; height: 100%; object-fit: cover;" />
//                     </div>`;
//             }
        
//             popupContent += `
//                 <p><a href="https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}" target="_blank">Get Directions</a></p>
//                 <p>${properties.Type || ""}</p>
//                 <p>${properties.Address || ""}, ${properties.City || ""}, ${properties.State || ""}</p>
//                 <p>${parseFloat(coordinates[1]).toFixed(2)}, ${parseFloat(coordinates[0]).toFixed(2)}</p>
//                 <a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`;
        
//             new mapboxgl.Popup()
//                 .setLngLat(coordinates)
//                 .setHTML(popupContent)
//                 .addTo(map);
//         });
//         },
//       );

//       // Clean up function
//       return () => map.remove();
//     });
//   }, []);

//   return <div id="map" style={{ height: "100%", width: "100%", padding: 0, margin: 0 }} />;
// };

// export default LearnMorePage;

import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; // Import Mapbox GL JS
import mauiLocations from './mauiLocations'; // Import data for Maui locations

const LearnMorePage = () => {
  useEffect(() => {
    // Set Mapbox access token from environment variable
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    // Initialize a new map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-156.700589, 20.816663], // Initial map center (longitude, latitude)
      zoom: 9, // Initial zoom level
      pitchWithRotate: false,
    });

    // Add navigation control to the map
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    // Wait for the map to load
    map.on('load', () => {
      map.setFog({}); // Set fog effect if needed

      // Load custom marker image
      map.loadImage(
        'https://raw.githubusercontent.com/robinahunter/maui-fountain-images/main/water-drop-shadow-maui.png',
        (error, image) => {
          if (error) throw error;

          // Add custom marker image to the map
          map.addImage('custom-marker', image);

          // Add a GeoJSON source and a layer for Maui locations
          map.addSource('mauiLocations', {
            type: 'geojson',
            data: mauiLocations, // GeoJSON data for Maui locations
          });

          // Add a layer for displaying custom markers
          map.addLayer({
            id: 'mauiLocations-symbol',
            type: 'symbol',
            source: 'mauiLocations',
            layout: {
              'icon-image': 'custom-marker',
              'icon-allow-overlap': true,
              'icon-size': 0.09,
            },
          });

          // Add a click event listener to the markers
          map.on('click', 'mauiLocations-symbol', (e) => {
            if (!e.features || !e.features.length) return;

            // Get coordinates and properties of the clicked feature
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

            // Construct HTML content for the popup
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

            // Create and display a popup on the map
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
          });
        },
      );

      // Clean up function to remove the map
      return () => map.remove();
    });
  }, []); // Run useEffect only once on component mount

  // Render the map container
  return <div id="map" style={{ height: '100%', width: '100%', padding: 0, margin: 0 }} />;
};

export default LearnMorePage;
