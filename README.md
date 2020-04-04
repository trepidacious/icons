# icons
Dockerised Node script to convert input png to icns, ico and resized png icon sets.

Uses [jimp](https://github.com/oliver-moran/jimp#readme) and [png2icons](https://github.com/idesis-gmbh/png2icons).

## Running

Preferred approach is to run in a container in VS Code:

1. Open in [VS Code](https://code.visualstudio.com/) with [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension installed. 
2. Replace `input.png` with your icon image, preferably 1024x1024 pixels or a multiple of this.
3. Start an integrated terminal, and run `npm install` then `node index.js`.
4. You should see icons in `dist` folder.

Alternatively if you have Node 8 installed already, just `npm install` and `node index.js` in this directory.