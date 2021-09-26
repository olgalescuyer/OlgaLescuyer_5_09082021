// Je crée const pour url de l'API :
const url = 'http://localhost:3000/api/cameras';

// Je déclare une variable globale qui va introduire mon template da ns la page d'accueil dès que les objets obtenus par fetch, transformés en json, lus et assignés/distrubués dans 'arrow function' + forEach :
let htmlElements = "";

let euro = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

// fetch va retourner la promesse :
fetch(url)

// Ici la reponse réçue dans la promesse je transforme en json format à l'aide de 'arrow function' :
.then((resp) => resp.json())

// Ensuite, dans la promesse je crée une fonction avec un argument data qui contient une boucle forEach :
.then(function(data) {

        // La boucle forEach pour chaque objet de 'data' contient une arrow function que récupère les items de tableau 'data' et introduit les items de table dans mon template html :
        data.forEach((camera) => {

            // Je logue pour controler des objets reçus :
            // consol.log(camera);

            // Mon template :
            htmlElements += ` 
            <div class="card rounded-0 content-index__card-custom">
            <div class="card__image card__image-index">
                <img src="${camera.imageUrl}" class="img-fluid " alt="appareil photo">
            </div>
            <div class="card-body">
                <h2 class="card-title h5">${camera.name}</h2>
                <p class="card-text"><span class="price">${euro.format((camera.price) / 100)} TVA incluse</span></p>
             
                <div class="text-center"><a href=" product.html?${camera._id}" class="btn button-custom rounded-0 w-100" title="cliquer pour aller à la page de produit" id="${camera._id}">En savoir plus</a></div>
            </div>
            </div>
             `
        })

        // Je crée une variable locale pour l'acces à la DOM + j'assigne  :
        let rootIndex = document.getElementById('root-index');

        // J'injecte mon template à l'aide de la propriété innerHTML :
        rootIndex.innerHTML = htmlElements;

    })
    .catch(function(error) {
        console.log(error);
    });