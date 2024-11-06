let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
let submitBtn = document.getElementById("sub-btn");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false; 
    }

    if(phone.length !== 11){
        phoneError.innerHTML = "Phone number must be of 11 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digits please.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Enter a valid email address";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = `${left} more characters required`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill the infromation correctly to submit";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }

    document.getElementById("contact-name").value = '';
    document.getElementById("contact-phone").value = '';
    document.getElementById("contact-email").value = '';
    document.getElementById("contact-message").value = '';

    submitError.style.display = "none"; 

    alert("Form submitted successfully!");
    return true; 
}

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault(); 

    validateForm();
})