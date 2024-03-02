// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl'; // Import Mapbox GL JS
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mauiLocations from './mauiLocations.geojson'; // Import data for Maui locations



// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-156.700589);
//   const [lat, setLat] = useState(20.816663);
//   const [zoom, setZoom] = useState(9);
  
//   mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }


// export default function LearnMorePage() {   

//     return (
//         <>
//         <div className="bg-neutral-200 h-screen w-screen">
//             <br />
//             <h1 className='pl-4 text-lg text-center'>Add content here</h1>
//             <br />
//             <h1 className='pl-4 text-lg text-center'></h1>
//             <br />
//             {/* <p className="mx-auto font-light w-[75vw]">More Resources | County of Maui, Department of Water<a href="https://www.mauicounty.gov/QuickLinks.aspx?CID=43#:~:text=watersheds%20are%20drinking%20water%20source,in%20West%20and%20Central%20Maui."><span className="text-pink-300 hover:text-teal-200">Mauicounty.gov/QuickLinks</span></a></p> */}
//         </div>
//         </>
//     )
// }

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// import mauiLocations from './mauiLocations.geojson';

const LearnMorePage = () => {
    useEffect(() => {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;


        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-156.700589, 20.816663], // lng, lat
            zoom: 9,
            pitchWithRotate: false,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        map.on('load', () => {
            map.setFog({});
            map.loadImage(
                'https://raw.githubusercontent.com/robinahunter/maui-fountain-images/4801ee115bc36e67c5fd53e5d1243a470eb9baf0/water-drop-maui.png',
                (error, image) => {
                    if (error) throw error;

                    map.addImage('custom-marker', image);

                    map.addSource('mauiLocations', {
                        type: 'geojson',
                        data: './mauiLocations.geojson',
                    });

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

                    map.addLayer({
                        id: 'mauiLocations-shadow',
                        type: 'symbol',
                        source: 'mauiLocations',
                        layout: {
                            'icon-image': 'marker-15',
                            'icon-allow-overlap': true,
                            'icon-size': 0.09,
                            'icon-offset': [0, 5],
                        },
                        paint: {
                            'icon-opacity': 0.5,
                            'icon-color': '#000000',
                        },
                    });

                    map.on('click', 'mauiLocations-symbol', (e) => {
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
                            .addTo(map);
                    });
                }
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

            map.on('mousedown', () => {
                userInteracting = true;
            });
            map.on('dragstart', () => {
                userInteracting = true;
            });

            map.on('moveend', () => {
                spinGlobe();
            });

            spinGlobe();
        });

        // Clean up function
        return () => map.remove();
    }, []);

    return <div id="map" style={{ width: '100%', height: '100vh' }} />;
};

export default LearnMorePage;