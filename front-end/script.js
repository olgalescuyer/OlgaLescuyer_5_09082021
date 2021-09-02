const url = 'http://localhost:3000/api/cameras';

let htmlElements = "";

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {

        data.forEach((camera) => {

            // console.log(camera.name);
            // console.log(camera.price);

            let price = (camera.price / 100);


            htmlElements += ` 
            <div class="card content__card">

            <div class="card__image">
                <img src="` + camera.imageUrl + `" class="card-img-top" alt="appareil photo">
            </div>

            <div class="card-body">

                <h5 class="card-title">` + camera.name + `</h5>

                <p class="card-text"><span class="price">` + price + ` € ` + `</span><br><span>TVA incluse</span></p>

                <div class="text-end"><a href="product.html" class="btn btn_principal">En savoir plus</a></div>

            </div>
            </div>
             `
        })
        let allCameras = document.getElementById('root');
        allCameras.innerHTML = htmlElements;

    })
    .catch(function(error) {
        console.log(error);
    });


// template index.html :
/*
                <div class="card content__card">

                            <div class="card__image">
                                <img src="" class="card-img-top" alt="appareil photo">
                            </div>

                            <div class="card-body">

                                <h5 class="card-title"></h5>

                                <p class="card-text"><span class="price"></span><br><span>TVA inclus</span></p>

                                <div class="text-end"><a href="product.html" class="btn btn_principal">En savoir plus</a></div>

                            </div>
                </div>
                    

 */