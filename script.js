// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Initialisation. Configuration de la requête. Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/api/teddies', true)

request.onload = function() {
    // Ecouter un événement. onload- pour des erreurs. Begin accessing JSON data here

    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((teddy) => {
            console.log(teddy.name)
        })
    } else {
        console.log('error')
    }
}

// Envoyer la requête. GET n'a pas de body ->(0) . Send request
request.send()