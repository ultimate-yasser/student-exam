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

    // Validate First Name
    if (checkName(fname.value)){
        fname.style.border= "#28a745 3px solid"
    }else{
        fname.style.border= "#dc3545 3px solid"
        return false;
    }


    return false; // to make it never submit
}

// Define the onsubmit function of the form

form = document.forms["register"]