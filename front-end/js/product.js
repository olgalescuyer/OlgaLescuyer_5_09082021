// Récupération de l'id dans l'url :
const queryStringUrlId = window.location.search;
// console.log(queryStringUrlId);

// pour couper le point d'interrogation :
const id = queryStringUrlId.slice(1);
// console.log(id);

let htmlElementsProduct = "";
let innerSelect = "";
let objProduct = {};

// Je crée une variable + id récupéré-coupé :
let urlProduct = `http://localhost:3000/api/cameras/${id}`;

// Pour formater le prix du produit :
let euro = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
// .toLocalString("EUR", {style : 'currency', currency: 'EUR'})

// Afficher le produit (de l'objet) qui a été sélectionné par l'id :
fetch(urlProduct)

.then((resp) => resp.json())

.then(function(data) {
        console.log(data);

        let name = data.name
        let price = euro.format((data.price) / 100);
        let idProduct = data._id;
        let image = data.imageUrl;
        let description = data.description;
        // console.log(idProduct);

        htmlElementsProduct += `
        <div class="card content__card">

            <div class="row g-0">
                <div class="col-md-4 card__image card__image_product">
                    <img src="${image}" class="img-fluid" alt="appareil photo ${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">${name}</h1>
        
                        <p class="card-text"><span class="price fs-3">${price}</span><span>TVA incluse</span></p>
        
                        <form action="">

                            <div class="d-flex pb-2">

                            <label for="list-lenses" class="form__label fs-5">Lentilles disponibles :  </label>
        
                            <select name="list-lenses" id="list-lenses" class="form-select form__item fs-5" aria-label="Default select"></select>

                           
                            </div>
                                                         
                            <button type="button" class="btn fs-5 mb-2 button" id="btn-submit">Ajouter au panier</button>
        
                        </form>


                        <!--Accordion-->

                        <div class="accordion accordion-flush " id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  Description
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" >
                                    <div class="accordion-body">${description}</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                  Livraison
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                                    <div class="accordion-body"></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                  Retour et Garantie
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree">
                                    <div class="accordion-body"></div>
                                </div>
                            </div>
                        </div>

                        <!--End-->
                      
        
                    </div>
                </div>
            </div>
        
        </div>
        `

        let rootProduct = document.querySelector('#root-product');
        rootProduct.innerHTML = htmlElementsProduct;

        // Je crée une boucle pour les options :
        let lenses = data.lenses;

        lenses.forEach((lense) => {

            console.log(lense)
            innerSelect += `<option value="${lense}" class="form__option">${lense}</option>`

        });

        // soit une autre boucle :

        // let allLenses = data.lenses;
        // console.log(lenses);

        // for (const element in allLenses) {
        //     innerSelect += `<option value="${allLenses[element]}">${allLenses[element]}</option>`;
        //     console.log(element);
        // }


        // soit encore une autre :

        // for (const element of allLenses) {
        //     innerSelect += `<option value="${element}">${element}</option>`;
        // }

        // J'injecte dans le html :
        let select = document.querySelector('#list-lenses');
        select.innerHTML = innerSelect;

        /*-----------------------------Récupération du choix 'au clique' -------------------------------*/
        // Je récupère le button dans le DOM :
        let btnSubmit = document.querySelector('#btn-submit');

        // Ecouter l'événement et créer un objet de choix de l'utilisateur :
        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();

            // Détécter le choix de l'utilisateur et mettre dans un objet :
            let choiceOption = select.value;

            // Récupérer les valeur du formulaire dans un objet :
            objProduct = {

                image: image,
                name: name,
                lense: choiceOption,
                price: data.price,
                quantity: 1,
                id: idProduct,

            };
            console.log(objProduct);


            //-----------------------------------------------------------localStorage :
            //Je controle à l'aide de la méthode 'getItem' s'il y a la clé 'product' que je vais créer dans le localStorage; ensuite, je transforme l'objet de produit en JSON + je l'assigne à une variable :
            let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
            // console.log(productInLocalStorage);
            // ça donne null parce que la clé n'existe pas encore, donc je vais créer la clé dans le 'else' ->>

            if (productInLocalStorage) {

                productInLocalStorage.push(objProduct);
                localStorage.setItem('product', JSON.stringify(productInLocalStorage));
                console.log(productInLocalStorage);

            }
            // s'il n'y a pas de produit enregistré dans le localStorage - false (null) ->> : 
            else {
                // Je récupère ma variable dans le tableau : 
                productInLocalStorage = [];
                // ensuite, j'envoie le produit séléctionné qui se transforme en json pour aller au localStorage :
                productInLocalStorage.push(objProduct);

                // Je crée la clé 'product' pour le tableau qui contient le produit choisi au clique + je transforme en json à l'aide de la méthode stringify :
                localStorage.setItem('product', JSON.stringify(productInLocalStorage));
                // console.log(productInLocalStorage);
            }

            // pour le badge dans le header :

            counterBadge();

        });

    })
    .catch(function(error) {
        console.log(error);
    });

//--------------------------------------------------------Affichage de la somme dans le badge 'panier' du header :
// ------------------------pour compter des produits ajoutés :
// console.log(productInLocalStorage.length);

// let count = productInLocalStorage.length;
// let rootCounter = document.querySelector('.root-counter');
// rootCounter.innerText = count;