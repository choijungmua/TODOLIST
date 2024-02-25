const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

//화면에 그리기
function paintTodo(Todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = Todo;

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//화면에 새로고침
function handleToDoSubmit(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}
todoForm.addEventListener("submit", handleToDoSubmit);
