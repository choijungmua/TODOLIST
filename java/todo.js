const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form Input");
const toDoList = document.getElementById("todo-list");

//1. 저장하는 함수 만들기




//1. Delete 함수 만들기
//2. event의 target값 찾기
//3. 상수로 지정한다음 지우기
function DeleteClick(event){
    const li = event.target.parentElement
    li.remove();
}



//1. span, li, button, Input을 만든다.
//2. li안에 span과 button을 넣는다
//3. todoList에 값에 todo 값을 넣는다.
function saveInput(todo){
    const span = document.createElement("span");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", DeleteClick);
    span.innerText = todo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


//1. 새로고침 되지 않도록 함수를 정의한다.
//2. 그 값을 newTodo에 변수 저장하고
//3. todoInput의 값을 비운다.
function handlesubmit(e){
    e.preventDefault();
    let newTodo = toDoInput.value
    toDoInput.value = "";
    saveInput(newTodo);
}

toDoForm.addEventListener("submit", handlesubmit);