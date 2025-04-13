import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: 5174,
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL, // Use VITE_BACKEND_URL from .env
          changeOrigin: true, // Change origin to target URL
          secure: false, // Allow insecure connections (for development)
          rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV), // Example usage
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Example alias
      },
    },
  };
});
