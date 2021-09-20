var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

/*----------------------------------------------------------------*/
// Récupérer des valeurs du formulaire dans le localStorage :


const btnFormSubmit = document.querySelector('.button-form-submit');


btnFormSubmit.addEventListener('click', (e) => {
    e.preventDefault;

    const formValues = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        postcode: document.querySelector('#postcode').value,
        address: document.querySelector('#address').value
    }

    // Mettre formValues dans le localStorage :
    localStorage.setItem('formValues', JSON.stringify(formValues));

    const objCartForm = {
        productInLocalStorage,
        formValues
    }
    console.log(objCartForm);


    location.replace("thank-you-page.html");
    console.log(formValues)
})

//------------------------------- Validation du forrmulaire :

// const firstName = formValues.firstName;
console.log(objCartForm);