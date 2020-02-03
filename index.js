var Jimp = require('jimp');
 
// Open input and write resized versions
Jimp.read('input.png', (err, input) => {
  if (err) throw err;

  const sizes = [16, 22, 32, 48, 64, 128, 256, 512];

  sizes.forEach(size => 
    input
      .clone()
      .resize(size, size) // resize
      .write(`./dist/${size}.png`)  //save
  );
});

// Convert to ico and icns
// npx png2icons input.png icon -all -bc -i

var png2icons = require("png2icons");
var fs = require("fs");

var input = fs.readFileSync("input.png");

png2icons.setLogger(console.log);

// Apple ICNS with bilinear interpolation and no color reduction.
var output = png2icons.createICNS(input, png2icons.BICUBIC, 0);
if (output) {
    fs.writeFileSync("./dist/icon.icns", output);
}

// Microsoft ICO using BMP icons with Bicubic interpolation,
// (numOfColors is ignored). PNG is false, giving all BMP images for compatibility.
output = png2icons.createICO(input, png2icons.BICUBIC, 0, false);
fs.writeFileSync("./dist/icon.ico", output);

