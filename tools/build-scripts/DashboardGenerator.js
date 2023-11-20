const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '../..', 'package', 'apps');
const dest = path.join(__dirname, '../..', 'package', 'apps');
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL = process.env.BASE_URL;

const date = new Date();

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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                      rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                      crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
                        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
                        crossorigin="anonymous"
                        async defer></script>
              </head>
            <body class="container">
              <header class="row">
                <h1 class="col display-1">React App Library</h1>
              </header>

              <main>
                <h2>App. List</h2>
                <ul class="nav flex-column">
`;

        directories.forEach((dir) => {
            htmlContent += `
              <li class="nav-item mb-2">
                <a class="nav-link p-0 text-body-primary" href="${BASE_URL}${dir}/">${dir}</a>
              </li>`;
        });

        htmlContent += `
              </ul>
            </main>
            <footer class="py-3 my-4">
              <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="https://www.linkedin.com/in/paulalexs/" class="nav-link px-2 text-body-secondary">LinkedIn</a></li>
                <li class="nav-item"><a href="https://github.com/paulAlexSerban" class="nav-link px-2 text-body-secondary">Github</a></li>
                <li class="nav-item"><a href="https://paulserban.eu/" class="nav-link px-2 text-body-secondary">Site</a></li>
                <li class="nav-item"><a href="https://paulserban.eu/portfolio/" class="nav-link px-2 text-body-secondary">Portfolio</a></li>
                <li class="nav-item"><a href="https://paulserban.eu/blog/" class="nav-link px-2 text-body-secondary">Blog</a></li>
              </ul>
              <p class="text-center text-body-secondary">© ${date.getFullYear()} paulserban.eu | Generated on ${date.toLocaleString()}</p>
            </footer>
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
