// Firstly we create functions to validate the input fields using regex

//validate names in (First Name , Last Name)
function checkName(name) {
    let regex = /^[A-Z][a-z ]{1,20}$/
    return regex.test(name)
}

//validate username
function checkUsername(username){
    let regex = /^[a-zA-Z0-9_-]{2,20}$/
    return regex.test(username)
}

//validate Email
function checkEmail(email){
    let regex = /^[a-z0-9]{2,}@gmail\.com$/
    return regex.test(email)
}

//validate password
function checkPass(password){
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    return regex.test(password)
}

// validate Confirm password
function checkConfPass(password, cPassword){
    return password === cPassword;
}