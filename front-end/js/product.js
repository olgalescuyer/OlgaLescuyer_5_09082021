// Récupération de l'id dans l'url :
const queryStringUrlId = window.location.search;
// console.log(queryStringUrlId);

// pour couper le point d'interrogation :
const id = queryStringUrlId.slice(1);
// console.log(id);

let htmlElementsProduct = "";
let innerSelect = "";
let objProduct = {};

let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
console.log(productInLocalStorage);



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

        let name = data.name
        let price = euro.format((data.price) / 100);
        let idProduct = data._id;
        let image = data.imageUrl;
        let description = data.description;
        // console.log(idProduct);


        if (productInLocalStorage.find(p => p.id === data._id)) {

            console.log('ok');

            htmlElementsProduct += `
            <div class="card rounded-0 ">
                <div class="row g-0">
                    <div class="col-md-4 card__image card__image_product">
                        <img src="${image}" class="img-fluid" alt="appareil photo ${name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title" id="">${name}</h1>
            
                            <p class="card-text"><span class="price fs-3">${price}</span><span> TVA incluse</span></p>
            
                            <form action="">
                                <div class="d-sm-flex pb-2">
                                <label for="list-lenses" class="form__label fs-5">Lentilles disponibles :  </label>
            
                                <select name="list-lenses" id="list-lenses" class="form-select form__item fs-5" aria-label="Default select"></select>
                               
                                </div>
                                  
                                <div class="d-flex mb-2 ">
                                <button type="button" class="btn rounded-0 fs-5 button-custom" id="btn-submit" disabled>Ajouter au panier</button>
    
                                <div class="position-relative p-2">
    
                                <div class="productOutOfStock  position-absolute pl-4">épuisé</div>
                                <div class="productOnStock invisible">seulement 1 article en stock</div>
                               
                                </div>
                                   
                                </div>
            
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

                // console.log(lense)
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

        } else {

            htmlElementsProduct += `
            <div class="card rounded-0 ">
                <div class="row g-0">
                    <div class="col-md-4 card__image card__image_product">
                        <img src="${image}" class="img-fluid" alt="appareil photo ${name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title" id="">${name}</h1>
            
                            <p class="card-text"><span class="price fs-3">${price}</span><span> TVA incluse</span></p>
            
                            <form action="">
                                <div class="d-sm-flex pb-2">
                                <label for="list-lenses" class="form__label fs-5">Lentilles disponibles :  </label>
            
                                <select name="list-lenses" id="list-lenses" class="form-select form__item fs-5" aria-label="Default select"></select>
                               
                                </div>
                                  
                                <div class="d-flex mb-2 ">
                                <button type="button" class="btn rounded-0 fs-5 button-custom" id="btn-submit">Ajouter au panier</button>
    
                                <div class="position-relative p-2">
    
                                <div class="productOutOfStock  position-absolute pl-4 invisible">épuisé</div>
                                <div class="productOnStock ">seulement 1 article en stock</div>
                               
                                </div>
                                   
                                </div>
            
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

                // console.log(lense)
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

        }

        /*-----------------------------Récupération du choix 'au clique' -------------------------------*/
        // Je récupère le button dans le DOM :
        let btnSubmit = document.querySelector('#btn-submit');



        // Ecouter l'événement et créer un objet de choix de l'utilisateur :
        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();

            // Récupérer les valeur du formulaire dans un objet :
            objProduct = {

                image: image,
                name: name,
                // lense: select.value,
                price: data.price,
                id: idProduct,

            };
            console.log('au clique, je récupère un objet : ', objProduct);

            btnSubmit.disabled = true;

            //-----------------------------------------------------------localStorage :
            // let productInLocalStorage = JSON.parse(localStorage.getItem('product'));

            // console.log(productInLocalStorage);

            // ça donne null parce que la clé n'existe pas encore, donc je vais créer la clé dans le 'else' ->>

            if (productInLocalStorage) {

                putInLocalStorage(objProduct);

                console.log('productInLocalStorage :', productInLocalStorage);

            } // s'il n'y a pas de produit enregistré dans le localStorage - false (null) ->> : 
            else {

                // Le tableau pour les objets sélectionnés : 
                productInLocalStorage = [];
                // ensuite, j'envoie le produit séléctionné qui se transforme en json pour aller au localStorage,
                // je crée la clé 'product' pour le tableau qui contient le produit choisi au clique + je transforme en json à l'aide de la méthode stringify :

                putInLocalStorage(objProduct);
            }

            // Fonction pour le badge dans le header :
            counterBadge();

            function putInLocalStorage(obj) {

                if (productInLocalStorage.find(p => p.lense === obj.lense && p.id === obj.id)) {
                    console.log('ok');


                    let productOutOfStock = document.querySelector('.productOutOfStock');
                    console.log(productOutOfStock);
                    productOutOfStock.classList.remove('invisible');
                    document.querySelector('.productOnStock').classList.add('invisible');

                    location.reload();

                } else {

                    productInLocalStorage.push(obj);
                    localStorage.setItem('product', JSON.stringify(productInLocalStorage));

                    location.reload();
                }

            }

        });

    })
    .catch(function(error) {
        console.log(error);
    });

// addToCart(product) {

//     if (this.carts.find(p => p.id === product.id)) {
//         product.qty++
//     } else {
//         this.carts.push(product)
//     }
// }

// addToCart(product) {
//     this.carts.push(product)
// }