# Asset Configuration

This folder contains the centralized asset configuration for the application.

## How It Works

All image assets use the `getAssetUrl()` function from `src/config/assets.js`, which provides a single point of configuration for all asset paths.

## Configuration Options

### Option 1: Environment Variable (Recommended for Production)

Create a `.env` file in the project root and set:

```env
VITE_ASSET_BASE_URL=/assets
```

Or for a CDN:
```env
VITE_ASSET_BASE_URL=https://cdn.example.com/assets
```

### Option 2: Edit the Config File Directly

Edit `src/config/assets.js` and change the default return value:

```javascript
// For public folder (works with any hosting)
return '/assets';

// For localhost (development)
return 'http://localhost:3845/assets';

// For CDN
return 'https://cdn.example.com/assets';
```

## Examples

- **Localhost (Figma MCP)**: `http://localhost:3845/assets`
- **Public Folder**: `/assets` (works for any hosting)
- **CDN**: `https://cdn.example.com/assets`
- **Subdirectory**: `/my-app/assets`

## Usage in Components

```javascript
import { getAssetUrl } from '../config/assets';

const myImage = getAssetUrl("filename.svg");
```

All components already use this pattern, so you only need to change the configuration in one place!

