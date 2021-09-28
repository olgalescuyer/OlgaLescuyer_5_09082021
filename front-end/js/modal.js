var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

// --------------------------------------------------Validation du champ de formulaire :
const form = document.querySelector('.needs-validation');
// console.log(form);

const btnFormSubmit = form.querySelector('.button-form-submit');

const firstName = form.querySelector('#firstName');
const lastName = form.querySelector('#lastName');
const address = form.querySelector('#address');
const city = form.querySelector('#city');
const email = form.querySelector('#email');

// const inputEmail = form.querySelector(`input[type = "email"]`);
// const allInputsText = form.querySelectorAll(`input[type = "text"]`);

const allInputsForm = form.querySelectorAll('input');
// console.log(allInputsForm);

// pour récupérer les données de lèutilisateur :
let contact = {};

//--- pour vérifier tous les champs je crée un objet avec des regex :
const input_fields = {
    firstName: /^[a-z\d]{2,12}$/i,
    lastName: /^[a-z\d]{2,12}$/i,
    address: /^[a-z\d]{2,12}$/i,
    city: /^[a-z\d]{2,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

}

// la fonction ternaire qui prend en params la valeur de l'input, regex de l'objet. Elle applique la méthode .test :
const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid-feedback-form' : field.className = 'invalid-feedback-form';
    // console.log(field.value);

}

allInputsForm.forEach(item => item.addEventListener(
    'keyup', e => {

        validate(e.target, input_fields[e.target.attributes.name.value]);

        // la valeur de l'input :
        // console.log(e.target);

        //e.target.attributes.name.value
        //cela obtient le champ cible et va à ses attributs
        //pour l'attribut name et vérifie la valeur de celui-ci.
        // console.log(e.target.attributes.name.value);

    }

));

// 3) vérifier si les champs sont remplis:
form.addEventListener('submit', function(e) {
    e.preventDefault();

    allInputsForm.forEach(element => {

        // Récupérer le formulaire dans l 'objet à condition que tous les champs soient remplis - true :
        if () {
            contact = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                address: form.address.value,
                city: form.city.value,
                email: form.email.value
            }
            console.log(contact);

            doFetchPost();

        } else {

            // pour les champs non-remplis :
            for (let i = 0; i < allInputsForm.length; i++) {

                // condition pour les champs non-remplis :
                if (!allInputsForm[i].value) {

                    // -----test anim :

                    allInputsForm[i].style.background = '#ffb8b8';
                    allInputsForm[i].classList.add('anim-error');

                    // setTimeout(() => {
                    //     allInputsForm[i].classList.remove('anim-error');
                    // }, 500)


                    // console.log(allInputsForm[i]);
                }

            }
        }




    })


});














// // --------------------------------------------------Validation du formulaire - les bouttons 'confirmer' et 'annuler' :

//--- annuler :
let btnCancel = document.querySelector('.button-form-cancel');
// console.log(btnCancel);

btnCancel.addEventListener('click', function(e) {

    location.reload();
})

//--- confirmer la commande :
//-- (recupération object du formulair + productInLocalStorage) + fetch POST + redirection sur page 'confirmation de la commande'--//





function doFetchPost() {

    const urlOrder = 'http://localhost:3000/api/cameras/order';

    // pour recupérer des id des products :
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

            // location.replace("confirmation.html");
        })
        .catch(function(error) {

            console.log(error)

        })
}