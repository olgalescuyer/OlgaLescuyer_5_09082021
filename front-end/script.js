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

// template index.html :
/*
                         <div class="card content__card">

                            <div class="card__image">
                                <img src="" class="card-img-top" alt="appareil photo">
                            </div>

                            <div class="card-body">

                                <h5 class="card-title"></h5>
                                <p class="card-text"><span></span><br><span>TVA inclus</span></p>

                                <div class="text-end"><a href="product.html" class="btn btn_principale">En savoir plus</a></div>

                            </div>

                        </div>

 */