const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

//createElement
//javascript에서 html element를 생성하는 방법
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

console.log(backgroundImage);

//appendChild
//javascript에서 html을 추가하는 방법
document.body.appendChild(backgroundImage);