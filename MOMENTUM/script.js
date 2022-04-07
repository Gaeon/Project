const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handlerLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("Please Write Your Name");
    } else if(username.length > 15){
        alert("Your Name is Too Long.");
    }
}

loginButton.addEventListener("click", handlerLoginBtnClick);