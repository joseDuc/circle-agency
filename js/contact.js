
let nameOK, emailOK, phoneOK, messageOK;

window.addEventListener('load', () => {
    captureEvInput();
    captureEvSubmit();
    const email=getQuerystring('email');
    if(email){
        const input=document.querySelector('#email');
        if (input){input.value=email;}
    }
});

function captureEvInput() {
    let input = document.querySelector('#form .form-container .contact-name #name');
    if (input) {
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', focusInput);
    }
    input = document.querySelector('#form .form-container .contact-mode-email #email');
    if (input) {
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', focusInput);
    }
    input = document.querySelector('#form .form-container .contact-mode-phone #phone');
    if (input) {
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', focusInput);
    }
    input = document.querySelector('#form .form-container .contact-message #message');
    if (input) {
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', focusInput);
    }
}

function captureEvSubmit() {
    const submit = document.querySelector('#form .form-container  #submit ');
    if (submit) {
        submit.addEventListener('click', validateSubmit);
    }
}

function focusInput(e) {
    if (e) {
        switch (e.currentTarget.id) {
            case 'name':
                deleteErrorClassInput(e.currentTarget.parentElement);
                break;
            case 'email':
                deleteErrorClassInput(e.currentTarget.parentElement);
                break;
            case 'phone':
                deleteErrorClassInput(e.currentTarget.parentElement);
                break;
            case 'message':
                deleteErrorClassInput(e.currentTarget.parentElement);
                break;
            default:

        }
    }
}

function validateInput(e) {
    if (e) {
        switch (e.currentTarget.id.toLowerCase()) {
            case 'name':
                validateName(e.currentTarget);
                break;
            case 'email':
                validateEmail(e.currentTarget);
                break;
            case 'phone':
                validatePhone(e.currentTarget);
                break;
            case 'message':
                validateMessage(e.currentTarget);
                break;
            default:

        }
    }
}
function validateName(e) {
    if (e) {
        deleteErrorClassInput(e.parentElement);
        e.value = e.value.trim();
        if (e.value.length > 8) {
            return e.value;
        } else {
            insertErrorClassInput(e.parentElement);
        }
    }
    return null;
}

function validateEmail(e) {
    if (e) {
        deleteErrorClassInput(e.parentElement);
        e.value = e.value.trim();
        if (e.value.length > 4) {
            return e.value;
        } else {
            insertErrorClassInput(e.parentElement);
        }
    }
    return null;
}

function validatePhone(e) {
    if (e) {
        deleteErrorClassInput(e.parentElement);
        e.value = e.value.trim();
        if (e.value.length > 8) {
            return e.value;
        } else {
            insertErrorClassInput(e.parentElement);
        }
    }
    return null;
}

function validateMessage(e) {
    if (e) {
        deleteErrorClassInput(e.parentElement);
        e.value = e.value.trim();
        if (e.value.length > 9) {
            return e.value;
        } else {
            insertErrorClassInput(e.parentElement);
        }
    }
    return null;
}

function validateSubmit(e) {
    const msg = document.querySelector('.errorMsg');
    if (msg) { msg.hidden = true }
    let nameOK, emailOK, phoneOK, messageOK;
    nameOK = validateName(document.querySelector('#name'));
    emailOK = validateName(document.querySelector('#email'));
    phoneOK = validateName(document.querySelector('#phone'));
    messageOK = validateName(document.querySelector('#message'));
    if (nameOK && emailOK && phoneOK && messageOK) {
        console.log(nameOK + ' ' + emailOK + ' ' + phoneOK + ' ' + messageOK)
    } else {
        e.preventDefault();
        if (msg) { msg.hidden = false }
    }
}
function insertErrorClassInput(element) {
    if (element) {
        if (!element.classList.contains('errorInput')) {
            element.classList.toggle('errorInput');
        }
    }
}
function deleteErrorClassInput(element) {
    if (element && element.classList.contains('errorInput')) {
        element.classList.toggle('errorInput');
    }
}
