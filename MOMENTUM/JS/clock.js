const clock = document.querySelector("h2#clock");

//padStart  padEnd
//string의 길이를 지정해 남은 자릿수를 특정 문자로 채울 수 있도록 하는 function
//"1".padStart(2, "0") -> "01"
//"1".padEnd(2, "0") -> "10"
//"1".padStart(3, "0") -> "001"
//"1".padEnd(3, "0") -> "100"

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getClock();
//interval 
//x ms 단위로 무언가를 반복시키고자 할 때 사용
setInterval(getClock, 1000);

//timeout 
//x ms 뒤에 무언가를 실행시키고자 할 때 사용
//setTimeout(sayHello, 5000);