const fs = require('fs');
const path = require('path');
const sass = require('sass');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'lib');
const NODE_ENV = process.env.NODE_ENV || 'development';

if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
}

const getComponents = () => {
    let components = [];
    const types = ['atoms', 'molecules', 'organisms', 'pages'];

    types.forEach((type) => {
        const allFiles = fs.readdirSync(path.resolve(SRC_DIR, `${type}`)).map((file) => ({
            input: `${SRC_DIR}/${type}/${file}`,
            output: `${DIST_DIR}/${type}/${file.replace('.scss', '.css')}`,
        }));
        components = [...components, ...allFiles];
    });

    return components;
};

const compile = (inputFile, outputFile) => {
    const result = sass.compile(inputFile, {
        style: NODE_ENV === 'production' ? 'compressed' : 'expanded',
    });

    if (!fs.existsSync(path.dirname(outputFile))) {
        fs.mkdirSync(path.dirname(outputFile));
    }

    fs.writeFileSync(outputFile, result.css);

    console.log(`[ scss ] ${outputFile} - ${(result.css.length / 1024).toFixed(2)} Kb`);
};

compile(`${SRC_DIR}/global.scss`, `${DIST_DIR}/global.css`);

getComponents().forEach(({ input, output }) => {
    compile(input, output);
});
