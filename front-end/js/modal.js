var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})


// Validation du formulaire :

// 1) accès au DOM element :
let rootFormContact = document.getElementById('root-form-contact');
// console.log(rootFormContact);

// 2) lancer la fonction de la verification reGex :
isValidLetter();

// 3) raccorder l'accès + écouteur + j'ajout une fonctione callback avec un condition :
rootFormContact.addEventListener('input', function(e) {

    const value = e.target.value;
    // console.log(value);

    // let input = document.querySelector('.form-control');

    if (isValidLetter(value)) {

        // input.classList.add('is-validated');

        console.log(Boolean(isValidLetter(value)));
        console.log("it's true");

    } else {

        // input.classList.add('not-valid');

        console.log(Boolean(isValidLetter(value)));
        console.log("it's not true");
    }

})

// 2) la fonction de verification reGex elle-même :
function isValidLetter(value) {

    return /^[A-Za-z]{2,20}$/.test(value);
}