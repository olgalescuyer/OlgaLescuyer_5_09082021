var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

// --------------------------------------------------Validation du champ de formulaire :

const form = document.querySelector('#root-form-contact');

const btnFormSubmit = form.querySelector('.button-form-submit');

const firstName = form.querySelector('#firstName');
const lastName = form.querySelector('#lastName');
const address = form.querySelector('#address');
const city = form.querySelector('#city');
const email = form.querySelector('#email');

const inputEmail = form.querySelector(`input[type = "email"]`);
const inputText = form.querySelectorAll(`input[type = "text"]`);

const allInputsForm = form.querySelectorAll('input');

let contact = {};

// 3) vérifier si les champs sont remplis:
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // je rajoute la class de Bootstrap:
    // form.classList.add('was-validated');

    isValidEmail();

    // Récupérer le formulaire dans l 'objet à condition que tous les champs soient remplis - true :
    if (doValidEmail(form.email.value) && form.firstName.value && form.lastName.value && form.address.value && form.city.value) {
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

        // je mets la class de bootstrap :
        form.classList.add('was-validated');

        // pour eviter la duplication des erreurs :
        let errors = form.querySelectorAll('.invalid-feedback');

        for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
        }

        // pour les champs non-remplis :
        for (let i = 0; i < allInputsForm.length; i++) {

            // condition pour les champs non-remplis :
            if (!allInputsForm[i].value) {

                let error = document.createElement('div');

                // je mets la class de bootstrap :
                error.className = 'invalid-feedback';
                error.innerHTML = 'Veuillez remplir ce champ !';
                allInputsForm[i].parentElement.appendChild(error, allInputsForm[i]);


                // console.log(allInputsForm[i]);

            }

        }

    }

});

// la function de vérification de reGex :
function isValidEmail() {

    // je crée un élément auquel je vais assigner des class de message d'erreur :
    let valid = document.createElement('div');

    // pour eviter la duplication :
    removeErrorMessage();
    removeConfirmMessege();

    // les condition d'application de la fonction isValid :
    if (!doValidEmail(form.email.value) && form.email.value) {

        // je enleve la responsabilité de bootstrap car il tolère les faute :
        form.classList.remove('was-validated');

        // je mets la class  :
        valid.className = 'invalid-feedback-form';
        valid.innerHTML = 'L’adresse e-mail est-elle bien valide ? Voici un exemple de format : votre.nom@domaine.fr';
        form.email.parentElement.appendChild(valid, form.email);

    } else if (doValidEmail(form.email.value)) {

        valid.classList.toggle('valid-feedback-form');

        // je mets la class :
        valid.className = 'valid-feedback-form';
        valid.innerHTML = 'L’adresse e-mail est bien valide !';
        form.email.parentElement.appendChild(valid, form.email);

        // console.log(form.email.value);
    }
}

//pour eviter la duplication de message sous les champs de validation j'applaqque la fonction avec une boucle :
removeErrorMessage = function() {

    let errors = form.querySelectorAll('.invalid-feedback-form');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();

    }

}
removeConfirmMessege = function() {

    let confirm = form.querySelectorAll('.valid-feedback-form');

    for (let i = 0; i < confirm.length; i++) {
        confirm[i].remove();

    }
}


// 2) les fonctions de verification reGex elles-même :
//--- pour les éléments textuelles :

// function doValidText(valueText) {

//     return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]{2,20}$/.test(valueText);
// }

// //--- pour les éléments de l'adresse :
// function doValidAddress(valueAddress) {

//     return /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]{2,20}$/.test(valueAddress);
// }

// //--- pour un élément email : 
function doValidEmail() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return (true)
    }

    return (false)
}

// function doValidEmail(valueEmail) {

//     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(String(valueEmail).toLowerCase(valueEmail));

// }

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



            location.replace("confirmation.html");
        })
        .catch(function(error) {

            console.log(error)

        })
}