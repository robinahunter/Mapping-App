// import 'dotenv/config';
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   // Ensure PORT is read from process.env if not defined in .env files
//   const PORT = env.PORT || process.env.PORT;

//   return {
//     define: {
//       'process.env.REACT_APP_ESRI_KEY': JSON.stringify(env.REACT_APP_ESRI_KEY),
//       'process.env.REACT_APP_MAP_FEATUREDLAYER_KEY': JSON.stringify(env.REACT_APP_MAP_FEATUREDLAYER_KEY),
//     },
//     root: path.resolve(__dirname, 'frontend'),
//     plugins: [react()],
//     resolve: {
//       alias: {
//         // Setup an alias for the ArcGIS API
//         '@arcgis/core': path.resolve(__dirname, 'node_modules/@arcgis/core'),
//       },
//     },
//     server: {
//       proxy: {
//         '/api': {
//           target: `http://localhost:${PORT}`,
//           changeOrigin: true,
//           secure: false,
//           ws: true,
//         },
//       },
//     },
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig(({ mode }) => {
  // Ensure PORT is read from process.env if not defined in .env files
  const PORT = process.env.PORT || 3000;

  return {
    define: {
      'process.env.REACT_APP_ESRI_KEY': JSON.stringify(process.env.REACT_APP_ESRI_KEY),
      'process.env.REACT_APP_MAP_FEATUREDLAYER_KEY': JSON.stringify(process.env.REACT_APP_MAP_FEATUREDLAYER_KEY),
    },
    root: path.resolve(__dirname, 'frontend'),
    plugins: [react()],
    resolve: {
      alias: {
        // Setup an alias for the ArcGIS API
        '@arcgis/core': path.resolve(__dirname, 'node_modules/@arcgis/core'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:${PORT}`,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  };
});
