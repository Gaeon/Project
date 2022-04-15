const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //JSON.stringify()
  //변수 등을 문자열 형태로 바꿈
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.parse()
  //문자열 형태의 변수를 실제 변수로 바꿈
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //filter
  //array에서 item을 지우고자 할때
  //지우고자 하는 item을 뺀 새로운 array를 만듦
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // todos 배열은 항상 빈 배열로 시작함
  // todos를 local storage에서 발견되는 것들로 채우고 시작함
  parsedToDos.forEach(paintToDo);
}