let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
// console.log(productInLocalStorage);

let euro = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

let htmlElementsCartDummy = "";
let htmlElementsCart = "";
let htmlElementsCartProduct = "";
let idProduct = "";

// si le panier est vide :
if (productInLocalStorage === null || productInLocalStorage == 0) {

    htmlElementsCartDummy += `
    <!--Panier vide stub/ plug /dumm-->

    <div class="card h-100  p-5 rounded-0 border-0">

        <h2 class="text-center p-3">Panier est vide !</h2>

        <div class="text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-x" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
        </div>

        <div class="text-center p-3">
            <a class="btn fs-5 button" href="index.html" role="button">Continuer mes achats</a>
        </div>

    </div>

    <!--end-->

    `
    let rootCart = document.querySelector('#root-cart');
    rootCart.innerHTML = htmlElementsCartDummy;

} else {

    htmlElementsCart = `

    <div class="card content__card">

        <h1 class="cart__title fs-2 p-3 fw-bold">Mon panier : 
        </h1>

        <div class="d-flex" >

        <div class="w-75" id="root-cart-product"></div> 


        <div class="w-25 d-flex " id="root-cart-counter">

        <div class="d-flex flex-column w-100 h-100 p-3 bg-white ">

        <div class="d-flex flex-column border border-2 border-top-0 border-end-0 border-start-0">

            <span class="fs-3 mb-4 fw-bold">Total</span>

             <span class="d-flex justify-content-between fs-5">Sous-total <span class="root-counter"></span></span>

            <span class="d-flex justify-content-between fs-5 pb-2">Livraison<span class="">Gratuite</span></span>
        </div>

        <div class="d-flex flex-column">
            <div class=" mb-4 d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <span class="fs-4 fw-bold">Total </span><span class="fs-6 fw-bold">(TVA incluse)</span>
                </div>
                <span class="fs-4 fw-bold root-counter-total"></span>
            </div>
           
            <form class="mt-2" action="">
                 <button type="button" class="btn fs-5 fw-bold w-100 button cart__button-submit" data-bs-toggle="modal" data-bs-target="#myModal">COMMANDER</button>
            </form>
        </div>

        </div>

        </div>

        
        </div>
        

    </div>
`
    let rootCart = document.querySelector('#root-cart');
    rootCart.innerHTML = htmlElementsCart;

    productInLocalStorage.forEach((product) => {

        idProduct = product.id;
        console.log(idProduct);

        let price = euro.format((product.price) / 100);

        htmlElementsCartProduct += `
           
                <div class="row border border-2 border-bottom-0 border-start-0 border-end-0 p-2 g-0 " >
                    <div class="col-sm-3 d-flex flex-column justify-content-center p-2 g-0">
                        <div class="page-cart__image">

                            <div class="page-cart__product-image">
                                <a href="product.html?${product.id}" title="cliquer pour aller à la page du produit">
                                <img src="${product.image}" alt="appareil photo ${product.name}" class="img-fluid ">
                                </a>
                            </div>
               
                        </div>
                    </div>
                    <div class="col-sm-4 d-flex flex-column justify-content-center p-2">
                        <h2 class="fs-3 product-name">${product.name}</h2>
                        <p class="fs-5 product-option">Lentille : ${product.lense}</p>
                    </div>
                    <div class="col-sm-1 d-flex flex-column justify-content-center p-2">
                        <span>X1</span>
                    </div>
                    <div class="col-sm-3 d-flex flex-column justify-content-center p-2">
                        <span class="fs-4 product-price">Price ${price}</span>
                    </div>
                    <div class="col-sm-1 d-flex flex-column justify-content-center p-2">

                        <button class="cart__button-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                       
                    </div>
                </div>
        
        `;

    })

    let rootCartProduct = document.querySelector('#root-cart-product');
    rootCartProduct.innerHTML = htmlElementsCartProduct;

}

// -------------------------------------------------------Supprimer un produit du panier :
let btnDelete = document.querySelectorAll('.cart__button-delete');
// console.log(btnDelete);

for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', (e) => {
        e.preventDefault();

        let idForDelete = productInLocalStorage[i].id;
        // console.log(idForDelete);

        productInLocalStorage = productInLocalStorage.filter(element => element.id !== idForDelete);
        // console.log(productInLocalStorage);

        // je renvoie un nouveau tableau dans le localStorage :
        localStorage.setItem('product', JSON.stringify(productInLocalStorage));

        // une fenetre modal pour avertir qu'un produit a été supprimé sur

        // et recharger la page :
        window.location.reload();

    })
}



//-------------------------------Calculer la somme TOTAL :------------------------------------------------
let countPriceTotal = [];

for (let i = 0; i < productInLocalStorage.length; i++) {

    let priceProductInCart = productInLocalStorage[i].price;

    countPriceTotal.push(priceProductInCart);
    // console.log(countPriceTotal);
}

// addition :
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const countTotal = countPriceTotal.reduce(reducer, 0);
// console.log(countTotal);

let convert = euro.format((countTotal) / 100);

let spanCount = document.querySelector('.root-counter');
spanCount.innerText = `${convert}`;

let spanCountTotal = document.querySelector('.root-counter-total');
spanCountTotal.innerText = `${convert}`;