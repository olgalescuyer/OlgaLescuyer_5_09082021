var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

// --------------------------------------------------Validation du champ de formulaire :
const form = document.querySelector('.needs-validation');
// console.log(form);

const btnFormSubmit = form.querySelector('.button-form-submit');
const btnCancel = form.querySelector('.button-form-cancel');

const firstName = form.querySelector('#firstName');
const lastName = form.querySelector('#lastName');
const address = form.querySelector('#address');
const city = form.querySelector('#city');
const email = form.querySelector('#email');

const allInputsForm = form.querySelectorAll('input');
// console.log(allInputsForm);

// pour récupérer les données de l'utilisateur :
let contact = {};

//--- pour vérifier tous les champs je crée un objet avec des regex :
const input_fields = {
    firstName: /^[a-zA-Z\u0080-\u024F\s\,-]{2,25}$/i,
    lastName: /^[a-zA-Z\u0080-\u024F\s\,-]{2,25}$/i,
    address: /^[a-zA-Z0-9\u0080-\u024F\s\.,-]{5,40}$/i,
    city: /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

};

// console.log(input_fields.firstName);

// la fonction-expression ternaire qui prend en params la valeur de l'input, regex de l'objet. Elle applique la méthode .test :
const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid-feedback-form' : field.className = 'invalid-feedback-form';

    // console.log(regex.test(field.value));

};

// pour vérifier les champs un par un :
allInputsForm.forEach(item => item.addEventListener(
    'keyup', e => {

        validate(e.target, input_fields[e.target.attributes.name.value]);

        //élément - field :
        // console.log(e.target);

        //e.target.attributes.name.value
        //cela obtient le champ cible et va à ses attributs
        //pour l'attribut name et vérifie la valeur de celui-ci.
        // console.log(e.target.attributes.name.value);

    }

));


// --------------------------------------------------Validation du formulaire les booutons 'confirmer' et 'annuler' :
// --- 'confirmer' :

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer le formulaire dans l 'objet à condition que tous les champs soient remplis - true :
    if (input_fields.firstName.test(form.firstName.value) && input_fields.lastName.test(form.lastName.value) && input_fields.address.test(form.address.value) && input_fields.city.test(form.city.value) && input_fields.email.test(form.email.value)) {
        contact = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                address: form.address.value,
                city: form.city.value,
                email: form.email.value
            }
            // console.log(contact);

        doFetchPost();

    } else {

        // pour les champs non-remplis :
        for (let i = 0; i < allInputsForm.length; i++) {

            // condition pour les champs non-remplis :
            if (!allInputsForm[i].value) {

                // --- animation de négation :

                allInputsForm[i].style.background = 'linear-gradient(142deg, rgba(220,133,37,1) 2%, rgba(146,92,247,1) 100%)';
                allInputsForm[i].classList.add('anim-error');

                setTimeout(() => {

                    allInputsForm[i].classList.remove('anim-error');

                }, 500)

            }

        }
    }

});
// pour enlever la couleur des inputs de l'animation de négation sur les champs de l'input :
allInputsForm.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})

//--- confirmer la commande :
//-- (recupération object du formulair + productInLocalStorage) + fetch POST + redirection sur page 'confirmation de la commande'--//

function doFetchPost() {

    const urlOrder = 'http://localhost:3000/api/cameras/order';

    // pour recupérer les id des products :
    let products = [];

    productInLocalStorage.forEach(product => {
        products.push(product.id);
    });

    // console.log(products);

    fetch(urlOrder, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ contact, products })
        })
        .then(response => response.json())
        .then(function(response) {

            // console.log(response["orderId"]);

            // je crée la clé pour localStorage et envoie :
            localStorage.setItem("order", response["orderId"]);

            console.log(productInLocalStorage);

            location.replace("confirmation.html");
        })
        .catch(function(error) {

            console.log(error)

        })
}

//--- 'annuler' :
btnCancel.addEventListener('click', function(e) {

    location.reload();
})