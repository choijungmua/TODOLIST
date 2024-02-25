# TODOLIST
투두리스트를 js로 구현하는 것을 다시 복습하는 페이지입니다.
html css 만드는 과정도 중요하지만 클론코딩에서 배운 js의 todolist 작성도 해보는 것이 좋을 것 같다고 생각합니다.

todolist 작성하기.

## input

### type

text = 텍스트형 인풋

### placeholder

회색글씨로 글씨 쓰기 전에 나오는 거.

### required :

폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시함.

HTML 안에 이렇게 작성한다.

### Form

이라는 것은 input을 묶어주는 하나의 묶음이다. 투두리스트에 무언가를 기입하기 위해서 input태그를 넣어 text를 타일핑 할 수 있는 기능을 추가한다.

### ul

그 밑에 ul을 작성하여 text를 기입한 것을 넣을 수 있다.

```
    <form id="todo-form">
      <input type="text" placeholder="Write" , required />
    </form>
    <ul id="todo-list"></ul>
```

### javascript

에서는 매번 id를 찾아 작성 하기 번거우므로 const를 사용하여 form, Input, ul을 묶어준다.

```jsx
const toDoform = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
```

추가로 페이지가 새로고침 되는것을 방지하기위해서 함수를 정의한다.

event가 발생하였을 때

event.preventDefault();를 실행시킨다. ( 새로고침을 방지하는 함수 )

console.log(toDoInput.value)는 toDoInput의 값을 console.log에 실행시킨다.

```jsx
function handleTodoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
}
toDoForm.addEventListener("submit", handleTodoSubmit);

```

만약 Input의 값을 넣을때마다 없애주고싶을땐. 아래와 같이 작성한다.

```jsx
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}
toDoForm.addEventListener("submit", handleTodoSubmit);

```
