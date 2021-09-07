// Récupération de la chaine de requête dans l'url :
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// pour couper le point d'interrogation :
const id = queryString_url_id.slice(1);
// console.log(id);

// Afficher le produit (de l'objet) qui a été sélectionné par l'id :
let response = fetch(`http://localhost:3000/api/cameras/${id}`)
    // console.log(response);

.then((resp) => resp.json())

.then(function(dataProduct) {
    console.log(dataProduct);

    let product = dataProduct;



    htmlElementsProduct += ``

    let getProduct = document.querySelector('#root-product');
    getProduct.innerHTML = htmlElementsProduct;
})

// La structure html pour la page de produit :
/*
    <div class="card">

    <div class="row g-0">
        <div class="col-md-4 card__image card__image_product">
            <img src="/back-end/images/vcam_2.jpg" class="img-fluid" alt="appareil photo">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">` + camera.name + `</h1>

                <p class="card-text"><span class="price">` + price + `€ TVA incluse</span></p>

                <form action="">

                    <label for="list-lenses">Lenses disponibles :</label>

                    <select name="list-lenses" id="list-lenses" class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>



                    <!-- <input type="text" id="lenses" list="list-lenses" placeholder="Faites votre choix" required>

                    <datalist id="list-lenses"> 
                        <option value="value-1">value-1</option>
                    </datalist> -->

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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur ratione natus, alias facilis dolores exercitationem asperiores sequi unde ut minima, facere sed fuga, cum omnis libero magnam molestiae inventore.
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