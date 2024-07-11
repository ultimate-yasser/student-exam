// JavaScript Code to check login

function checkLogin(form){
    username = form["username"]
    password = form["password"]
    hash = simpleHash(password.value)
    saved = localStorage.getItem(username.value)

    if (saved == null){
        document.getElementById("username-error").textContent = "username \
        Does not exist"
        return false
    }else{
        document.getElementById("username-error").textContent = ""
    }

    data = JSON.parse(saved)
    savedHash = data.passwordHash
    if (savedHash != hash){
        document.getElementById("password-error").textContent = "Wrong Password"
        return false
    }else{
        document.getElementById("username-error").textContent = ""
    }
    return true;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

form = document.forms["login"]