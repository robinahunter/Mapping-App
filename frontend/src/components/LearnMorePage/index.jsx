import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mauiLocations from '../../data/mauiLocations.geojson';

const LearnMorePage = () => {
    let map; // Declare map variable outside of useEffect

    useEffect(() => {
        // console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);
        // mapboxAccessToken = `process.env.REACT_APP_MAPBOX_ACCESS_TOKEN`;

      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN; // Ensure you have this variable in your .env file

    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [-156.700589, 20.816663], // lng, lat
      zoom: 9,
      pitchWithRotate: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-left");

    map.on("load", () => {
      map.setFog({});

      // Load and add the image for custom markers
      map.loadImage(
        "https://raw.githubusercontent.com/robinahunter/maui-fountain-images/4801ee115bc36e67c5fd53e5d1243a470eb9baf0/water-drop-maui.png",
        (error, image) => {
          if (error) throw error;

          map.addImage("custom-marker", image);

          map.addSource("mauiLocations", {
            type: "geojson",
            data: mauiLocations,
          });

          map.addLayer({
            id: "mauiLocations-symbol",
            type: "symbol",
            source: "mauiLocations",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
              "icon-size": 0.09,
            },
          });

          map.addLayer({
            id: "mauiLocations-shadow",
            type: "symbol",
            source: "mauiLocations",
            layout: {
              "icon-image": "marker-15",
              "icon-allow-overlap": true,
              "icon-size": 0.09,
              "icon-offset": [0, 5],
            },
            paint: {
              "icon-opacity": 0.5,
              "icon-color": "#000000",
            },
          });

          map.on("click", "mauiLocations-symbol", (e) => {
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
                            <p>${properties.Type || ""}</p>
                            <p>${properties.Address || ""}, ${properties.City || ""}, ${properties.State || ""}</p>
                            <p>${parseFloat(coordinates[1]).toFixed(2)}, ${parseFloat(coordinates[0]).toFixed(2)}</p>
                            <a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`;

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
          });
        },
      );

            
      // Spin functionality
      let userInteracting = false;
      const spinEnabled = true;
      const secondsPerRevolution = 240;
      const maxSpinZoom = 5;
      const slowSpinZoom = 3;

      function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.getCenter();
          center.lng -= distancePerSecond;
          map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }

      map.on("mousedown", () => {
        userInteracting = true;
      });
      map.on("dragstart", () => {
        userInteracting = true;
      });

      map.on("moveend", () => {
        spinGlobe();
      });

      spinGlobe();
    });

    // Clean up function
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%", padding: 0, margin: 0 }} />;
}

export default LearnMorePage;


