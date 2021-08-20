// Create a request variable and assign a new XMLHttpRequest object to it. ICI- Déclarer une variable nommée request = création un nouvel objet.
var request = new XMLHttpRequest()

// Initialisation. Configuration de la requête. open - méthode qui effectue cette requête. Async car 'true'. Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/api/teddies', true)

request.onload = function() {
    // Ecouter un événement. onload- pour des erreurs. Begin accessing JSON data here

    // Begin accessing JSON data here. response - body de la repponse du serveur.
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((teddy) => {
            console.log(teddy.name)
        })
    } else {
        console.log('error')
    }
}

// Envoyer la requête. Variable - request. . Methode - send. GET n'a pas de body ->(0) 
request.send()