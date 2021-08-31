function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const app = document.getElementById('root');
const url = 'http://localhost:3000/api/cameras';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        // console.log(data);

        let cameras = data.results;

        return cameras.map(function(camera) {

            let contentCard = createNode('div');
            contentCard.setAttribut('class', 'card content__card');

            let cardImg = createNode('div');
            contentImg.setAttribut('class', 'card__image');

            let img = createNode('img');
            img.setAttribut = ('class', 'card-img-top');

            img.src = camera.imageUrl;

            let cardBody = createNode('div');
            cardBody.setAttribut = ('class', 'card-body');

            let nameOfCam = createNode('h5');
            nameOfCam.setAttribut('clas', 'card-title');

            nameOfCam.innerHTML = `${camera.name}`;

            let cardText = createNode('p');
            cardText.setAttribut('class', 'card-text');

            let price = createNode('span');
            price.setAttribut('class', 'price');

            price.innerHTML = `${camera.price}`;

            let br = createNode('br');

            let tva = createNode('span');

            tva.textContent = `TVA inclus`;

            let textEnd = createNode('div');
            textEnd.setAttribut('class', 'text-end');

            let btn = createNode('a');
            btn.setAttribut('class', 'btn btn_principal');

            btn.textContent = `En savoir plus`;



            append(contentCard, cardImg);
            append(cardImg, img);
            append(cardBody, nameOfCam);
            append(cardBody, cardText);
            append(cardText, price);
            append(cardText, br);
            append(cardText, tva);
            append(cardBody, textEnd);
            append(textEnd, btn);
            append(app, contentCard);

        })
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