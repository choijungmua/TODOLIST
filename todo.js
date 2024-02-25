const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintTodo(Todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = Todo;
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}
todoForm.addEventListener("submit", handleToDoSubmit);
