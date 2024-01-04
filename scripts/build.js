
import { minify } from 'terser';
import CleanCSS from 'clean-css';
import fs from 'fs';

// Function to minify JavaScript files
const minifyJavaScript = async (filePath) => {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code);
    fs.writeFileSync(filePath, result.code);
};

// Function to minify CSS files
const minifyCSS = (filePath) => {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = new CleanCSS().minify(code);
    fs.writeFileSync(filePath, result.styles);
};

// Minify the main.js file
minifyJavaScript('public/main.js');

// Minify the styles.css file
minifyCSS('public/styles.css');
