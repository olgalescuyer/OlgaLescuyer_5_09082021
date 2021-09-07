// Récupération de la chaine de requête dans l'url :
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// pour couper le point d'interrogation :
const id = queryString_url_id.slice(1);
// console.log(id);

// Je crée une variable + id récupéré-coupé :
let urlProduct = `http://localhost:3000/api/cameras/${id}`;

let euro = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

let htmlElementsProduct = "";

// Afficher le produit (de l'objet) qui a été sélectionné par l'id :
fetch(urlProduct)

.then((resp) => resp.json())

.then(function(data) {

        console.log(data);


        htmlElementsProduct += `
        <div class="card">

            <div class="row g-0">
                <div class="col-md-4 card__image card__image_product">
                    <img src="` + data.imageUrl + `" class="img-fluid" alt="appareil photo ${data.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">` + data.name + `</h1>
        
                        <p class="card-text"><span class="price">` + euro.format((data.price) / 100) + ` TVA incluse</span></p>
        
                        <form action="">
        
                            <label for="list-lenses">Lenses disponibles :</label>
        
                            <select name="list-lenses" id="list-lenses" class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="0">One</option>
                                <option value="1">Two</option>
                                <option value="2">Three</option>
                              </select>
        
                            <button type="button" class="btn">Ajouter au panier</button>
        
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



    })
    .catch(function(error) {
        console.log(error);
    });

// La structure html pour la page de produit :

/*
     <div class="card">

            <div class="row g-0">
                <div class="col-md-4 card__image card__image_product">
                    <img src="` + element.imageUrl + `" class="img-fluid" alt="appareil photo ${element.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">` + element.name + `</h1>
        
                        <p class="card-text"><span class="price">` + price + `€ TVA incluse</span></p>
        
                        <form action="">
        
                            <label for="list-lenses">Lenses disponibles :</label>
        
                            <select name="list-lenses" id="list-lenses" class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="0">One</option>
                                <option value="1">Two</option>
                                <option value="2">Three</option>
                              </select>
        
                            <button type="button" class="btn">Ajouter au panier</button>
        
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
                                       ` + element.description + `
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
*/