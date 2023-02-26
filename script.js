const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contstraint API
    isValid = form.checkValidity();
    if (!isValid) {
        // Style main message for error
        message.textContent = 'Please fill out all fields';
        return;
    }
    // Check and see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'rgb(73, 247, 82)';
        password2El.style.borderColor = 'rgb(73, 247, 82)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'rgb(250, 0, 0)';
        password2El.style.borderColor = 'rgb(250, 0, 0)';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Succesful registration!";
        message.style.color = 'rgb(73, 247, 82)';
        messageContainer.style.borderColor = 'rgb(73, 247, 82)';
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}


// Event Listener
form.addEventListener('submit', processFormData);