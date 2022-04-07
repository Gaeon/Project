const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick(){
    if(h1.style.color === "skyblue")
        h1.style.color="tomato";
    else
        h1.style.color="skyblue";
}

//title.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);