
let nameOK, emailOK, phoneOK, messageOK;

window.addEventListener('load', () => {
    captureEvInput();
    captureEvSubmit();
});

function captureEvInput() {
    let input = document.querySelector('#form .form-container .contact-name #name');
    if (input) {
        input.addEventListener('blur', validateName);
    }
    input = document.querySelector('#form .form-container .contact-mode-email #email');
    if (input) {
        input.addEventListener('blur', validateEmail);
    }
    input = document.querySelector('#form .form-container .contact-mode-phone #phone');
    if (input) {
        input.addEventListener('blur', validatePhone);
    }
    input = document.querySelector('#form .form-container .contact-message #message');
    if (input) {
        input.addEventListener('blur', validateMessage);
    }
}

function captureEvSubmit() {
    const submit = document.querySelector('#form .form-container  #submit ');
    if (submit) {
        submit.addEventListener('click', validateSubmit);
    }
}

function validateName(e) {
    nameOK = null;
    if (e) {
        const element=e.currentTarget;
        deleteErrorClassInput(element.parentElement);
        element.value=element.value.trim();
        if (element.value.length > 4) {
            nameOK = element.value;
        } else {
            insertErrorClassInput(element.parentElement);
        }
    }
}

function validateEmail(e) {
    emailOK = null;
    if (e) {
        const element=e.currentTarget;
        deleteErrorClassInput(element.parentElement);
        element.value=element.value.trim();
        if (element.value.length > 4) {
            emailOK = element.value;
        } else {
            insertErrorClassInput(element.parentElement);
        }
    }
}

function validatePhone(e) {
    phoneOK = null;
    if (e) {
        const element=e.currentTarget;
        deleteErrorClassInput(element.parentElement);
        element.value=element.value.trim();
        if (element.value.length > 4) {
            phoneOK = element.value;
        } else {
            insertErrorClassInput(element.parentElement);
        }
    }
}

function validateMessage(e) {
    messageOK = null;
    if (e) {
        const element=e.currentTarget;
        deleteErrorClassInput(element.parentElement);
        element.value=element.value.trim();
        if (element.value.length > 10) {
            messageOK = element.value;
        } else {
            insertErrorClassInput(element.parentElement);
        }
    }
}

function validateSubmit(e) {
    
    const msg=document.querySelector('.errorMsg');
    if (msg){
        msg.hidden=true;
    }
    if (nameOK && emailOK && phoneOK && messageOK) {
        console.log(nameOK + ' ' + emailOK + ' ' + phoneOK + ' ' + messageOK)
    } else {
        e.preventDefault();
        if (msg){
            msg.hidden=false;
        }
    }
}
function insertErrorClassInput(element) {
    if (element) {
        if (!element.classList.contains('errorInput')){
            element.classList.toggle('errorInput');
        }
    }
}
function deleteErrorClassInput(element) {
    if (element) {
        if (element.classList.contains('errorInput')){
            element.classList.toggle('errorInput');
        }
       
    }
}
