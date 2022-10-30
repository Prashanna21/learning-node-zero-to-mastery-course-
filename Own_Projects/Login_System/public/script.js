const hideUnhideBtn = document.getElementById('hide-unhide-btn')
const createNewBtn = document.getElementById("create-new-btn")
const loginBtn = document.getElementById('login-btn')
const inputUsername = document.getElementById("input-username")
const inputPassword = document.getElementById('input-password')

function toggleHideUnhide() {
    if(hideUnhideBtn.dataset.state === "unhide"){
        hideUnhideBtn.className = `fa-sharp fa-solid fa-eye eye-slash-icon`
        inputPassword.type = "text"
        hideUnhideBtn.dataset.state = "hide"

    }

    else{
        hideUnhideBtn.className = `fa-solid fa-eye-slash eye-slash-icon`
        inputPassword.type = "password"
        hideUnhideBtn.dataset.state = "unhide"
    }
}

hideUnhideBtn.addEventListener('click', toggleHideUnhide)

async function addAccount(){
    const data = {}
    data[inputUsername.value] = inputPassword.value
    return await fetch('http://localhost:5000/accounts/createnew', {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify(data)
    })
}

async function login(){
    const data = {}
    data[inputUsername.value] = inputPassword.value
    console.log(data)
    const response =  await fetch('http://localhost:5000/accounts/login', {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify(data)
    })
    return response
}


if(document.documentURI === "http://localhost:5000/createaccount.html"){
    createNewBtn.addEventListener('click', addAccount)
}

else if(document.documentURI === "http://localhost:5000/index.html"){
    loginBtn.addEventListener('click', login)
}


