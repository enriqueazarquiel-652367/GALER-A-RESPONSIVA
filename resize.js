const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './assets';
const outputFolder = './imagenes';


if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const sizes = [
    { name: 'small', width: 400 },
    { name: 'medium', width: 800 },
    { name: 'large', width: 1200 },
    { name: 'xlarge', width: 1920 }
];

fs.readdirSync(inputFolder).forEach(file => {
    const inputPath = path.join(inputFolder, file);

    if (file.endsWith('.jpg')) {
        const nameWithoutExt = path.parse(file).name;

        sizes.forEach(size => {
            sharp(inputPath)
                .resize(size.width)
                .toFile(path.join(outputFolder, `${nameWithoutExt}-${size.name}.jpg`))
                .then(() => {
                    console.log(`Creada: ${nameWithoutExt}-${size.name}.jpg`);
                })
                .catch(err => console.error(`Error con ${file}:`, err));
        });
    }
});