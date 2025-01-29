export const env = {
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
};
