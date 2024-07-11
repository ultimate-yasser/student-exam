// Firstly we create functions to validate the input fields using regex


// validate names in (First Name , Last Name)
function checkName(name) {
    let regex = /^[A-Z][a-z ]{1,20}$/
    return regex.test(name)
}

// Validate username
function checkUsername(username){
    let regex = /^[a-zA-Z0-9_-]{2,20}$/
    return regex.test(username)
}

// Validate Email
function checkEmail(email){
    let regex = /^[a-z0-9]{2,}@gmail\.com$/
    return regex.test(email)
}

// Validate password
function checkPass(password){
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    return regex.test(password)
}

// Validate Confirm password
function checkConfPass(password, cPassword){
    return password === cPassword;
}

// Check the Whole form
function validateForm(form){
    // Initial Setting
    fname = form["fname"]
    lname = form["lname"]
    username = form["username"]
    accountType = form["accountType"]
    email = form["email"]
    password = form["password"]
    cpassword = form["cpassword"]
    isValid = true


    // Validate First Name
    if (checkName(fname.value)){
        fname.style.border= "#28a745 3px solid"
        document.getElementById("fname-error").textContent = ""
    }else{
        fname.style.border= "#dc3545 3px solid"
        document.getElementById("fname-error").textContent = "First letter must be uppercase\
        and must contain only letters"
        isValid = false
    }

    // Validate Last Name
    if (checkName(lname.value)){
        lname.style.border= "#28a745 3px solid"
        document.getElementById("lname-error").textContent = ""
    }else{
        lname.style.border= "#dc3545 3px solid"
        document.getElementById("lname-error").textContent = "First letter must be uppercase\
        and must contain only letters"
        isValid = false
    }

    // Validate Username
    if (checkUsername(username.value)){
        username.style.border= "#28a745 3px solid"
        document.getElementById("username-error").textContent = ""
    }else{
        username.style.border= "#dc3545 3px solid"
        document.getElementById("username-error").textContent = "Shall Not contain\
        space or special charchters except - and _"
        isValid = false
    }

    // Validate Account Type
    if (accountType.value){
        accountType.style.border= "#28a745 3px solid"
        document.getElementById("accountType-error").textContent = ""
    }else{
        document.getElementById("accountType-error").textContent = "This field is required"
        isValid = false
    }

    // Validate Email
    if (checkEmail(email.value)){
        email.style.border= "#28a745 3px solid"
        document.getElementById("email-error").textContent = ""
    }else{
        email.style.border= "#dc3545 3px solid"
        document.getElementById("email-error").textContent = "We accept only\
        gmail emails"
        isValid = false
    }

    // Validate Password
    if (checkPass(password.value)){
        password.style.border= "#28a745 3px solid"
        document.getElementById("password-error").textContent = ""
    }else{
        password.style.border= "#dc3545 3px solid"
        document.getElementById("password-error").textContent = "Password length\
        is from 8-16 and shall contain lowercase, uppercase, numbers and special charcters"
        isValid = false
    }

    // Validate Password
    if (checkConfPass(password, cpassword)){
        cpassword.style.border= "#28a745 3px solid"
        document.getElementById("cpassword-error").textContent = ""
    }else{
        cpassword.style.border= "#dc3545 3px solid"
        document.getElementById("cpassword-error").textContent = "password is not\
        the same as confirm password"
        return false
    }


    return isValid; // to make it never submit
}

// Define the onsubmit function of the form

form = document.forms["register"]