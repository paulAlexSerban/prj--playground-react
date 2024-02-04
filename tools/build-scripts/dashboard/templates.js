const utils = require('./utils');

// Function to generate the HTML for a library
const generateLibraryHTML = (app, baseUrl) => {
    return `
    <div class='col col-sm-6 col-md-4'>
        <div class="card" style="height: 100%;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body flex-column d-flex">
                <h3 class="card-title">${app.name}</h3>
                <p>v${app.version}</p>
                <p class="card-text">${app.description}</p>
                <a href="${baseUrl}apps/${app.slug}" class="btn btn-primary mt-auto">Demo</a>
            </div>
        </div>
    </div>
`;
};

const headHTML = `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Component Library</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      rel="stylesheet">
  <style>
    summary {
      display: flex;
    }
  </style>
</head>
`;

const headerHTML = `
<header class="row">
  <h1 class="col display-2">JavaScript Component Library</h1>
</header>
`;

const date = new Date();

const footerHTML = `
<footer class="py-3 my-4">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="https://www.linkedin.com/in/paulalexs/" class="nav-link px-2 text-body-secondary">LinkedIn</a></li>
    <li class="nav-item"><a href="https://github.com/paulAlexSerban" class="nav-link px-2 text-body-secondary">Github</a></li>
    <li class="nav-item"><a href="https://paulserban.eu/" class="nav-link px-2 text-body-secondary">Site</a></li>
    <li class="nav-item"><a href="https://paulserban.eu/portfolio/" class="nav-link px-2 text-body-secondary">Portfolio</a></li>
    <li class="nav-item"><a href="https://paulserban.eu/blog/" class="nav-link px-2 text-body-secondary">Blog</a></li>
  </ul>
  <p class="text-center text-body-secondary">© ${date.getFullYear()} paulserban.eu | Generated on ${date.toLocaleString()}</p>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
  crossorigin="anonymous"
  async defer></script>
</footer>
`;

module.exports = {
    headHTML,
    headerHTML,
    footerHTML,
    generateLibraryHTML,
};
