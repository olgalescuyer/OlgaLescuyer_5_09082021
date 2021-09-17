// Afficher le nombre de produit dans le header 'panier' sur toutes les pages du site (badge) :

function counterBadge() {

    let getProduitInLocalStorage = localStorage.getItem('product');

    let allProducts = JSON.parse(getProduitInLocalStorage);

    const countAllProducts = allProducts.length;

    if (countAllProducts > 0) {

        const badgeText = document.querySelector('.header__count');
        badgeText.innerText = `( ${countAllProducts} )`;

        let badgeIcon = document.querySelector('.header__icon_bag');
        badgeIcon.classList.add('invisible');

        let badgeIconCheck = document.querySelector('.header__icon_bag-check');
        console.log(badgeIconCheck);
        badgeIconCheck.classList.remove('invisible');

    }

}
counterBadge();