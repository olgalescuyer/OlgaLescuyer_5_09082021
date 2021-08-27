const app = document.getElementById('root');

// HEADER = headerContainer (logo + logoPanier)
const header = document.createElement('header');

const logo = document.createElement('img');
logo.src = './img/logo.png';
logo.setAttribute('class', 'header__logo');

const logoPanier = document.createElement('img');
logoPanier.src = './img/panier.png';
logoPanier.setAttribute('class', 'header__logo-panier');

const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'container-fluid');
headerContainer.classList.add('header__box');

header.appendChild(headerContainer);

headerContainer.appendChild(logo);
headerContainer.appendChild(logoPanier);

// SECTION-CONTENT = 3 container :
const sectionContent = document.createElement('section');
sectionContent.setAttribute('class', 'content');

// --1 container 
const containerTeddy = document.createElement('div');

containerTeddy.setAttribute('class', 'container-fluid');
containerTeddy.classList.add('content__box');

sectionContent.appendChild(containerTeddy);

// --2 container
const containerCam = document.createElement('div');

containerCam.setAttribute('class', 'container');
containerCam.classList.add('content__box');

sectionContent.appendChild(containerCam);

// --3 container
const containerFur = document.createElement('div');

containerFur.setAttribute('class', 'container');
containerFur.classList.add('content__box');

sectionContent.appendChild(containerFur);

// --------------


app.appendChild(header);
app.appendChild(sectionContent);


// Create a request variable and assign a new XMLHttpRequest object to it.
var requestCam = new XMLHttpRequest()

// Initialisation. Configuration de la requête. Open a new connection, using the GET request on the URL endpoint
requestCam.open('GET', 'http://localhost:3000/api/cameras', true)

requestCam.onload = function() {
    // Ecouter un événement. onload- pour des erreurs. Begin accessing JSON data here

    // Begin accessing JSON data here
    var dataCam = JSON.parse(this.response)

    if (requestCam.status >= 200 && requestCam.status < 400) {
        dataCam.forEach((camera) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const img = document.createElement('img')
            img.src = camera.imageUrl

            const h6 = document.createElement('h6')
            h6.textContent = camera.name

            const p = document.createElement('p')
            camera.price = camera.price / 100
            p.textContent = `Prix: ${camera.price}€`

            containerCam.appendChild(card)
            card.appendChild(img)
            card.appendChild(h6)
            card.appendChild(p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}


// Envoyer la requête. GET n'a pas de body ->(0) . Send request
requestCam.send()