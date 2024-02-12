import React, { useState, useEffect } from 'react';
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
// import axios from 'axios';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Basemap from '@arcgis/core/Basemap';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
// import Symbol from "@arcgis/core/symbols/Symbol.js";
// import Renderer from '@arcgis/core/renderers/Renderer.js';
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
// import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol.js";
// import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
// import calciteIcons from "@esri/calcite-ui-icons/docs/icons.json";
// import { loadModules } from 'esri-loader';


const HomePage = () => {
    useEffect(() => {
      const initializeArcGIS = async () => {
        esriConfig.apiKey = process.env.REACT_APP_ESRI_KEY; // Set your API key from environment variables
        // esriConfig.apiKey = process.env.REACT_APP_MAP_FEATUREDLAYER_KEY; // Set your API key from environment variables
  
        // Create a VectorTileLayer from a style URL
        const mapBaseLayer = new VectorTileLayer({
          url: 'https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/resources/styles/root.json',
        });
  
        // Create a Basemap with the VectorTileLayer
        const customBasemap = new Basemap({
            baseLayers: [mapBaseLayer],
            title: 'Street',
            id: 'streets',
            thumbnailUrl:
            'https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/info/thumbnail/ago_downloaded.png',
        });
        
        const map = new Map({
            basemap: 'arcgis/topographic', //streets-navigation-vector, arcgis/topographic, customBasemap
            ground: 'world-elevation',
        });

        const initCamera = {
            heading: 1,
            tilt: 1,
            position: {
                latitude: 20.753,
                longitude: -156.449,
                z: 200000,
            },
        };
        
        const view = new SceneView({
            container: 'viewDiv',
            map: map,
            camera: initCamera,
        });
        
        view.when(() => {
            // Add a BasemapToggle widget to toggle between basemaps
            const toggle = new BasemapToggle({
                visibleElements: {
                    title: true,
                },
                view: view,
                nextBasemap: 'satellite',
            });
            
            // Add widget to the top right corner of the view
            view.ui.add(toggle, 'top-right');
        });
     
    

        //         const fountainLayer = new FeatureLayer({
        //             url: "https://services8.arcgis.com/T51xV83kzxEuohfL/arcgis/rest/services/Water_Fountains_Locations/FeatureServer",
        //             renderer: new SimpleRenderer(customRenderer),
        //             popupTemplate: new PopupTemplate({
        //                 content: [
        //                     {
        //                         type: 'text',
        //                         text: '{Location}'
        //                     },
        //                     {
        //                         type: 'media',
        //                         mediaInfos: [
        //                             {
        //                                 type: 'image',
        //                                 value: {
        //                                     sourceURL: '{imageUrl}',
        //                                     width: '50px', // Adjust the width of the image
        //                                     height: 'auto' // Maintain aspect ratio
        //                                 }
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         type: 'text',
        //                         text: '<a href="https://www.google.com/maps/search/?api=1&query={latitude},{longitude}" target="_blank">Get Directions</a>'
        //                     }
        //                 ]
        //             }),
        //         });
            
        //         map.add(fountainLayer,0);
        //     });

// Create a new FeatureLayer instance with the specified URL
const featureLayer = new FeatureLayer({
    url: 'https://services8.arcgis.com/T51xV83kzxEuohfL/arcgis/rest/services/Water_Fountains_Locations/FeatureServer'
});

// Add the FeatureLayer to the map
map.add(featureLayer);

// Optionally, set a renderer for the feature layer
const renderer = {
    type: 'simple',
    symbol: {
        type: 'simple-marker',
        url: "https://drive.google.com/uc?id=1RE4mTAvWbMKh9XQ9US5Nx_7TXgDjZUkt",
        color: '#06b6d4',
        size: 8,
        outline: {
            color: [0, 0, 0, 0], // Specify transparent outline
            width: 0 // Set outline width to 0 to make it invisible
        }
    }
};
featureLayer.renderer = renderer;

// Optionally, set a popup template for the feature layer
const popupTemplate = {
    title: '{Location}',
    content: [
        {
            type: 'text',
            text: 'Drinking Fountain <a href="https://www.google.com/maps/search/?api=1&query={Latitude},{Longitude}" target="_blank">Get Directions</a>'
        },
        {
            type: 'text',
            text: `<a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`
        },
        {
            type: 'media',
            mediaInfos: [
                {
                    type: 'image',
                    value: {
                        sourceURL: '{image}',
                        width: '25vw', // Adjust the width of the image to fit the popup
                        height: 'auto' // Maintain aspect ratio
                    }
                }
            ]
        },

        {
            type: 'text',
            text: '<a href="https://www.google.com/maps/search/?api=1&query={Latitude},{Longitude}" target="_blank">Get Directions</a>'
        }
    ]
};
featureLayer.popupTemplate = popupTemplate;


    };
        
      initializeArcGIS();
    }, []);

    return <div id="viewDiv" style={{ height: '100vh', width: '100vw', padding: 0, margin: 0 }}></div>;
  };
  
  export default HomePage;