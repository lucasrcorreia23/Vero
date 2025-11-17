// Asset base URL configuration
// This can be overridden by environment variables or build configuration
// 
// To change the asset base URL, set VITE_ASSET_BASE_URL in your .env file:
//   VITE_ASSET_BASE_URL=http://localhost:3845/assets
//   VITE_ASSET_BASE_URL=/assets
//   VITE_ASSET_BASE_URL=https://cdn.example.com/assets
const getAssetBaseUrl = () => {
  // Check for environment variable first
  if (import.meta.env.VITE_ASSET_BASE_URL) {
    return import.meta.env.VITE_ASSET_BASE_URL;
  }
  
  // Default to public folder (works for any hosting)
  // Change this to 'http://localhost:3845/assets' if you want to use Figma MCP server
  return '/assets';
};

export const ASSET_BASE_URL = getAssetBaseUrl();

// Helper function to get asset URL
export const getAssetUrl = (filename) => {
  // Remove leading slash if present to avoid double slashes
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  const baseUrl = ASSET_BASE_URL.endsWith('/') ? ASSET_BASE_URL.slice(0, -1) : ASSET_BASE_URL;
  return `${baseUrl}/${cleanFilename}`;
};

