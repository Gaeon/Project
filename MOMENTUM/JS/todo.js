const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todos = [];


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
  //filter
  //array에서 item을 지우고자 할때
  //지우고자 하는 item을 뺀 새로운 array를 만듦
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  // todos 배열은 항상 빈 배열로 시작함
  // todos를 local storage에서 발견되는 것들로 채우고 시작함
  parsedTodos.forEach(paintTodo);
}