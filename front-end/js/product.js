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
        // console.log(data);

        let name = data.name;
        let price = euro.format((data.price) / 100);
        let idProduct = data._id;
        // console.log(idProduct);

        htmlElementsProduct += `
        <div class="card">

            <div class="row g-0">
                <div class="col-md-4 card__image card__image_product">
                    <img src="` + data.imageUrl + `" class="img-fluid" alt="appareil photo ${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">` + name + `</h1>
        
                        <p class="card-text"><span class="price">` + price + ` TVA incluse</span></p>
        
                        <form action="">
        
                            <label for="list-lenses">Lenses disponibles :</label>
        
                            <select name="list-lenses" id="list-lenses" class="form-select" aria-label="Default select">
                               
                              </select>
        
                            <button type="button" class="btn" id="btn-submit">Ajouter au panier</button>
        
                        </form>
                        <!-- Bootstrap accordion -->
                        <div class="accordion" id="accordionPanelsStayOpen">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                  Détails du Produit
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                       ` + data.description + `
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                 Livraison
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
        
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                 Retour et Garanties
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
        
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        
        </div>
        `


        let product = document.querySelector('#root-product');
        product.innerHTML = htmlElementsProduct;

        // Je crée une boucle pour les options :

        data.lenses.forEach((lense) => {

            // console.log(element)
            innerSelect += `<option value="${lense}" class="form__option">${lense}</option>`

        });

        // soit une autre boucle :

        // let allLenses = data.lenses;
        // // console.log(lenses);

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
            let choice = select.value;

            // Récupérer les valeur du formulaire dans un objet :
            objProduct = {
                name: name,
                lense: choice,
                price: price,
                quantity: 1,
                id: idProduct

            };

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

        });


    })
    .catch(function(error) {
        console.log(error);
    });