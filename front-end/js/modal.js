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

const allInputsForm = form.querySelectorAll('input');


// 2) lancer la fonction de la verification reGex :
doValidText();
doValidEmail();

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // pour supprimer la duplication des erreurs :
    const errors = form.querySelectorAll('.error');
    for (let j = 0; j < errors.length; j++) {
        errors[j].remove()
    }

    for (let i = 0; i < allInputsForm.length; i++) {

        // condition pour les champs non-remplis :
        if (!allInputsForm[i].value) {
            // console.log('is blank', allInputsForm[i]);

            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Cannot be blank'
            form[i].parentElement.insertBefore(error, allInputsForm[i])
        }

        // -------pour vérifier le champ de l'email :


        // -------pour vérifier les champs textuelles :

    }
});

function checkEmail() {
    let inputEmail = form.querySelector(`input[type = "email"]`);

    inputEmail.addEventListener('input', function(e) {
        const valueEmail = inputEmail.value;
        console.log(valueEmail);

        if (doValidEmail(valueEmail)) {

            console.log(doValidEmail(valueEmail));

        } else {

            console.log(doValidEmail(valueEmail));

        }

    })

}
checkEmail();

function checkText() {
    let inputText = form.querySelectorAll(`input[type = "text"]`);
    console.log(inputText);


    for (let i = 0; i < inputText.length; i++) {

        inputText[i].addEventListener('input', function(e) {

            const valueText = inputText[i].value;
            console.log(valueText);
            doValidText();

            if (doValidText(valueText)) {

                console.log(doValidText(valueText));

            } else {

                console.log(doValidText(valueText));

            }

        })
    }


}
checkText();

// // 1) accès au DOM element pour les input textuelle (je reçoie un tableau -> je vais utiliser la boucle for plus bas):
// let inputText = document.querySelectorAll(`input[type = "text"]`);
// // console.log(inputText);

// // --- por l'input email :
// let inputEmail = document.querySelector(`input[type = "email"]`);
// // console.log(inputEmail);



// // 3) raccorder l'accès + écouteur + j'ajout une fonctione callback avec un condition :

// //--- une boucle pour les inputs textuelle :
// for (let i = 0; i < inputText.length; i++) {

//     inputText[i].addEventListener('input', function(e) {

//         

//     })
// }

// //--- pour  l'élément de email :
// inputEmail.addEventListener('input', function(e) {

//     const valueEmail = e.target.value;

//     if (doValidEmail(valueEmail) && valueEmail !== 0) {

//         inputEmail.classList.add('is-validated');
//         inputEmail.classList.remove('not-valid');

//         console.log(doValidEmail(valueEmail));
//         console.log("it's true");

//     } else {

//         inputEmail.classList.remove('is-validated');
//         inputEmail.classList.add('not-valid');

//         console.log(doValidEmail(valueEmail));
//         console.log("it's not true");
//     }
// })


// 2) les fonctions de verification reGex elles-même :
//--- pour les éléments textuelles :
function doValidText(valueText) {

    return /^[a-zA-Z]{2,20}$/.test(valueText);
}

//--- pour un élément email : 
function doValidEmail(valueEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return re.test(String(valueEmail).toLowerCase(valueEmail));
}

// // --------------------------------------------------Validation du formulaire - les bouttons 'confirmer' et 'annuler' :

// //--- annuler :
// let btnCancel = document.querySelector('.button-form-cancel');
// // console.log(btnCancel);

// btnCancel.addEventListener('click', function(e) {

//     location.reload();
// })

// //--- confirmer :
// const form = document.querySelectorAll('#root-form-contact input');
// console.log(form);



// const btnFormSubmit = document.querySelector('.button-form-submit');

// btnFormSubmit.addEventListener('click', (e) => {
//     e.preventDefault;

//     // pour récupérer les produits du panier de localStorage :
//     const getProductsInLocalStorage = JSON.parse(localStorage.getItem('product'));
//     console.log(getProductsInLocalStorage);

//     // faire un objet de contact :
//     if (form.value) {

//         console.log(Boolean(form.value));

//         let contact = {
//             firstName: document.querySelector('#firstName').value,
//             lastName: document.querySelector('#lastName').value,
//             address: document.querySelector('#address').value,
//             city: document.querySelector('#city').value,
//             email: document.querySelector('#email').value
//         };
//         console.log(contact);

//     } else {



//         console.log(Boolean(form.value));
//     }



// });