const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '../..', 'package', 'apps');
const dest = path.join(__dirname, '../..', 'package', 'apps');
const BASE_URL = '/prj--reactjs-application-library/';

const init = () => {
    // Read the contents of the directory
    fs.readdir(source, (err, files) => {
        if (err) {
            return console.error('Error reading the directory:', err);
        }

        // Filter out only directories
        const directories = files.filter((file) => {
            return fs.statSync(path.join(source, file)).isDirectory();
        });

        // Start creating the HTML content
        let htmlContent = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React App Library</title>
        </head>
      <body>
      <h1>React App Library</h1>
      <div>Generated on ${new Date().toLocaleString()}</div>
      <div>Apps:</div>
      <ul>
      `;

        directories.forEach((dir) => {
            htmlContent += `
        <li>
          <a href="${BASE_URL}${dir}/">${dir}</a>
        </li>`;
        });

        htmlContent += `
      </ul>
      </body>
    </html>`;

        try {
            // Write the HTML content to index.html
            fs.writeFile(`${dest}/index.html`, htmlContent, (err) => {
                if (err) {
                    return console.error('Error writing to index.html:', err);
                }
                console.log('index.html has been generated!');
            });
        } catch (err) {
            console.error(err);
        }
    });
};

init();
