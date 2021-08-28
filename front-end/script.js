let allCameras = [];

// Appel API, je recupère les donnéess dans le tableau [allCameras] :
function fetchCamerasBase() {
    fetch("http://localhost:3000/api/cameras")
        .then(reponse => reponse.json())
        .then((allCameras) => {
            console.log(allCameras);


        })

}
fetchCamerasBase();








// const app = document.getElementById('root');
/* // Create a request variable and assign a new XMLHttpRequest object to it.
// var requestCam = new XMLHttpRequest()

// // Initialisation. Configuration de la requête. Open a new connection, using the GET request on the URL endpoint
// requestCam.open('GET', 'http://localhost:3000/api/cameras', true)

// requestCam.onload = function() {
//     // Ecouter un événement. onload- pour des erreurs. Begin accessing JSON data here

//     // Begin accessing JSON data here
//     var dataCam = JSON.parse(this.response)

//     if (requestCam.status >= 200 && requestCam.status < 400) {
//         dataCam.forEach((camera) => {
//             const card = document.createElement('div')
//             card.setAttribute('class', 'card')

//             const img = document.createElement('img')
//             img.src = camera.imageUrl

//             const h6 = document.createElement('h6')
//             h6.textContent = camera.name

//             const p = document.createElement('p')
//             camera.price = camera.price / 100
//             p.textContent = `Prix: ${camera.price}€`

//             containerCam.appendChild(card)
//             card.appendChild(img)
//             card.appendChild(h6)
//             card.appendChild(p)
//         })
//     } else {
//         const errorMessage = document.createElement('marquee')
//         errorMessage.textContent = `Gah, it's not working!`
//         app.appendChild(errorMessage)
//     }
// }


// // Envoyer la requête. GET n'a pas de body ->(0) . Send request
// requestCam.send()*/