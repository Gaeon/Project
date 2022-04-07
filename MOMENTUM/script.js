const title = document.querySelector(".hello:first-child h1"); 

let time = 0;

function handleTitleClick(){
    console.log("title was clicked!");
    if(time % 2 == 0)
        title.style.color="skyblue";
    else
        title.style.color="black";
    time++;
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
    title.style.color="red";    
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
    title.style.color="black";    
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    title.style.color = "beige";
}

function handleWindowCopy(){
    alert("Copier!");
}

function handleWindowOffline(){
    alert("No!");
}

function handleWindowOnline(){
    alert("Everything is Good!");
}

//title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);