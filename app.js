'use strict'

const form = document.querySelector('.form')
const email = document.querySelector('.email')
const emailError = document.querySelector('.error')
const password = document.querySelector('.password')
const passError = document.querySelector('.pass-error')
const charError = document.querySelector('.char-error')
const equalPasswords = document.querySelector('.equal-password')
const equalError = document.querySelector('.equal-error')



// Preventing form from submiting and calling functions every time we click on the sumbit button.

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    checkEmail()
    checkPassword()
    equalPassword()
    validation()
})



//Checking if the value of email input is valid. If not then making error div to appear.

function checkEmail() {
    if (email.value === '' || email.value === null) {
        emailError.style.display = 'block'
        email.style.border = '2px solid red'
    } else {
        emailError.style.display = 'none'
        email.style.border = '2px solid green'
    }
}



//Checking if the value of password input is valid. If not then making error div to appear. Also calling div error if the password length is less than 8 characters

function checkPassword() {
    if (password.value === '' || password.value === null) {
        passError.style.display = 'block'
        password.style.border = '2px solid red'
    } else if (password.value.length < 8) {
        charError.style.display = 'block'
        passError.style.display = 'none'
        password.style.border = '2px solid red'
    } else {
        passError.style.display = 'none'
        charError.style.display = 'none'
        password.style.border = '2px solid green'
    }
}



//Checking if passwords are the same. If not then making error div to appear.

function equalPassword() {
    if (equalPasswords.value != password.value) {
        equalError.style.display = 'block'
        equalPasswords.style.border = '2px solid red'
    } else if (equalPasswords.value === password.value && equalPasswords.value != '') {
        equalError.style.display = 'none'
        equalPasswords.style.border = '2px solid green'
    }
}

//Lastly checking if all the values of the form are valid. If so then proceeding to the form action link

function validation() {
    if (email.value && password.value.length >= 8 && equalPasswords.value === password.value) {
        location.href = form.getAttribute('action')
    }
}