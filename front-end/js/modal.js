var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

/*----------------------------------------------------------------*/
// Récupérer des valeurs du formulaire dans le localStorage :
const btnFormSubmit = document.querySelector('.button-form-submit');


btnFormSubmit.addEventListener('click', (e) => {
    e.preventDefault;

    const formValues = {
        prenom: document.querySelector('#prenom').value,
        nom: document.querySelector('#nom').value,
        mail: document.querySelector('#mail').value,
        code_postal: document.querySelector('#code_postal').value,
        adresse: document.querySelector('#adresse').value
    }

    // Mettre formValues dans le localStorage :
    localStorage.setItem('formValues', JSON.stringify(formValues));

    const pushBackend = {
        productInLocalStorage,
        formValues
    }
    console.log(pushBackend)

    location.replace("thank-you-page.html");

})