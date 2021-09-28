// Afficher le nombre de produit dans le header 'panier' sur toutes les pages du site (badge) :

function counterBadge() {
    // je demande le tableau au Storage :
    let getProduitInLocalStorage = localStorage.getItem('product');
    // console.log(getProduitInLocalStorage);

    // je fais en string :
    let allProducts = JSON.parse(getProduitInLocalStorage);
    // console.log(allProducts);

    // je demande la longueur de tableau (combien des items il contient) :
    const countAllProducts = allProducts.length;

    // je fais une condition qui impose le commencement de l'execution :
    if (countAllProducts > 0) {

        // j'introduit la longueur dans le html direct :
        const badgeText = document.querySelector('.header__count');
        badgeText.innerText = `( ${countAllProducts} )`;

        // je modifie le comportement des éléments d'animation dans le html :
        let badgeIcon = document.querySelector('.header__icon_bag');
        badgeIcon.classList.add('invisible');

        let badgeIconCheck = document.querySelector('.header__icon_bag-check');
        // console.log(badgeIconCheck);
        badgeIconCheck.classList.remove('invisible');

    }

}
counterBadge();