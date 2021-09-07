// Je crée const pour url de l'API :
const url = 'http://localhost:3000/api/cameras';

// Je déclare une variable globale qui va introduire mon template da ns la page d'accueil dès que les objets obtenus par fetch, transformés en json, lus et assignés/distrubués dans 'arrow function' + forEach :
let htmlElements = "";
let htmlElementsProduct = "";

// fetch va retourner la promesse :
fetch(url)

// Ici la reponse réçue dans la promesse je transforme en json format à l'aide de 'arrow function' :
.then((resp) => resp.json())

// Ensuite, dans la promesse je crée une fonction avec un argument data qui contient une boucle forEach :
.then(function(data) {

        // La boucle forEach pour chaque objet de 'data' contient une arrow function que récupère les items de tableau 'data' et introduit les items de table dans mon template html :
        data.forEach((camera) => {

            // Je logue pour controler des objets reçus :
            // console.log(camera);

            // Je transforme prix reçu (faire un fonction ?):

            // let price = (camera.price / 100).toFixed(2);
            // ça donne un string comme résultat

            let price = camera.price / 100;
            // console.log(priceBrut);
            // ça reste un nombre

            // let price = priceBrut.toFixed(2);
            // console.log(price);
            // pourqoui ça devient string ???

            // soit ? :
            // let price = priceBrut + ",00";
            // console.log(price);

            // Mon template :
            htmlElements += ` 
            <div class="card content__card content__card_index">

            <div class="card__image">
                <img src="` + camera.imageUrl + `" class="img-fluid " alt="appareil photo">
            </div>

            <div class="card-body">

                <h5 class="card-title">` + camera.name + `</h5>

                <p class="card-text"><span class="price">` + price + `€ TVA incluse</span></p>
             
                <div class="text-center"><a href=" product.html?` + camera._id + `" class="btn button-link redirect" title="cliquer pour aller à la page de produit" id="` + camera._id + `">En savoir plus</a></div>

            </div>
            </div>
             `
        })

        // Je crée une variable locale pour l'acces à la DOM + j'assigne  :
        let allCameras = document.getElementById('root');

        // J'injecte mon template à l'aide de la propriété innerHTML :
        allCameras.innerHTML = htmlElements;

    })
    .catch(function(error) {
        console.log(error);
    });



// Redirect à la page de produit 

// document.querySelector('.redirect')
//     .addEventListener('click', () => {
//         window.location.href = "";
//     })

// ???????????????????????                  'http://localhost:3000/api/cameras' + ':' + _id