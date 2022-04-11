const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const todos = [];

function saveTodos() {
  //JSON.stringify()
  //변수 등을 문자열 형태로 바꿈
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  //JSON.parse()
  //문자열 형태의 변수를 실제 변수로 바꿈
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((item) => console.log("this is the turn of", item));
}