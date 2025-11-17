# Assets Folder

This folder contains all the image assets used in the application.

## Image Files Needed

All image paths in the components have been updated to use `/assets/` instead of `http://localhost:3845/assets/`.

To make the images work, you need to:

1. **Option 1: Use Figma MCP Server**
   - Keep the Figma MCP server running on `localhost:3845`
   - The images will be served from there

2. **Option 2: Download Images Locally**
   - Download all the image files from the Figma MCP server
   - Place them in this `public/assets/` folder
   - The following files are needed:
     - 0f8652f8ff7c584de913b3287271ca86893e8e9c.svg
     - 36588f0e3486d1cd1a019a4f2a68af149696057d.svg
     - d6227ac8315906f615f05a1c1ba03d43d6df7524.svg
     - f8912fbd216447fab804805346316ad3b1fce4c0.svg
     - 464651dcd6e72c84745aa0a08879ce60d9c5d72b.svg
     - a761b6e9e10951ac7012fd6666f7fc5c21d6e525.svg
     - 82bd589bdc2ec3f7fcd5fc306cc6760b6199f663.svg
     - a39baf766fbd07ea59e3591039a47b474fb2c9b2.svg
     - 50b64c4960cb6000a01657500bb3e1db8438207b.svg
     - 4fb9b3f9b4383423bf7c23ba0b6180415abf36e2.svg
     - 23b5eddff80adcd17fee425233cfb63f223cd209.svg
     - 0844ef87b36850d717cdd6bb3bfe55c551bd54f6.svg
     - 47853bf78765cab0d4e3f8af2814d85f67a37730.svg
     - d4d2f233ca81d3a3b980ab2da6be7cf3ed0ec748.svg
     - 7b31767fbc647614b57ad6dbcc27d64fe4ed713e.svg
     - a87406bf7d9b92298e1d9af9b59ba3952ebb8e9f.svg
     - d20426885f8a2e5746aada6f725548a3825112fd.svg
     - 244eec758a3cd94dcd9d7af9e4230c5ffda53d52.svg
     - 6e2852c819a76969f4e61b7bb27e59217c867561.svg
     - d8085b32747018c3ad6d54a907b50648e33bfe92.svg
     - 2f997c5361bc49f0be38bd9dc4c4dab5c07d945f.svg
     - 6fdc4a654249e84893512c41fa0b585ccd7bbf06.svg
     - 9f13b25b212eb452ffc5cfcaf5d417b3d8743d30.svg
     - 6518e46c75f982f8600e8cef02dd23fe9a2e9609.svg
     - 6939a7ece2beedb42c3a218d426400c3816ed62f.svg
     - 9b2d16eb5161256e6278fb1dbc3e8f8fb06b621c.svg
     - a83d6218c33dca81d7a86c05ba26e421e0cb94fd.svg
     - 8ce7fb4a4539df2f1b5c50394b4543f17a998372.svg
     - 65f9d5c1a75f6aa2be3b50aab24897226d9ccb89.svg
     - 1e6753c007adbc004d52cb21febcf6164f6cc0da.png
     - 510c9adcc8bf8e515396f78bcd19bd3e232eba93.svg
     - b0485f66ed0f77ecdca87f933f2f9614cd74ec10.svg
     - fc229bb5c8ba467c27d5660623350c7cfe40043e.svg
     - d3662c7ef2a2e9ebd8077563f5537071efab1f95.svg
     - a119593e87fd48b56f53f8154436ad7529dc5431.svg
     - c5c06d73d1980b5ca901ff36af8ba62f14019ad4.svg
     - c6e4996f5f0880acebddbe3a0bef68ee1d571fad.svg
     - a45c51de94822af8c44ac049708f2ccc6836677e.svg
     - c15a84de08dd0714a2f5ae4b4095a8ed7498a4e2.svg
     - f73b85f2432237c3e46056eafdbbec728b4f9b82.svg
     - cee9600e743a06ea0cb75c72cb98715f2351ebdc.svg
     - 6697338215aaaf5634a7882fd2bc8b97f2136a37.svg

## Note

In Vite, files in the `public` folder are served at the root path, so `/assets/filename.svg` will correctly reference files in this folder.

