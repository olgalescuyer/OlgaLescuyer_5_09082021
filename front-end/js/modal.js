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


// 2) lancer la fonction de la verification reGex :
// doValidText();
// doValidEmail();

// 3) vérifier si les champs sont remplis : 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer le formulaire dans l'objet à condition que tous les champs soient remplis - true :
    if (doValidEmail(form.email.value) && doValidText(form.firstName.value) && doValidText(form.lastName.value) && doValidAddress(form.address.value) && doValidText(form.city.value)) {
        contact = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            address: form.address.value,
            city: form.city.value,
            email: form.email.value
        }
        console.log(contact);
    }

    // pour les champs non-remplis :
    for (let i = 0; i < allInputsForm.length; i++) {

        // condition pour les champs non-remplis :
        if (!allInputsForm[i].value) {

            // je rajoute la class de Bootstrap : 
            form.classList.add('was-validated');
        }

    }

});


// 2) les fonctions de verification reGex elles-même :
//--- pour les éléments textuelles :
function doValidText(valueText) {

    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]{2,20}$/.test(valueText);
}

//--- pour les éléments de l'adresse :
function doValidAddress(valueAddress) {

    return /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]{2,20}$/.test(valueAddress);
}

//--- pour un élément email : 
function doValidEmail(valueEmail) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    return re.test(String(valueEmail).toLowerCase(valueEmail));

}



// // --------------------------------------------------Validation du formulaire - les bouttons 'confirmer' et 'annuler' :

// //--- annuler :
let btnCancel = document.querySelector('.button-form-cancel');
// console.log(btnCancel);

btnCancel.addEventListener('click', function(e) {

    location.reload();
})