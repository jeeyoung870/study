const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event) {
    // 같은 list들 중 어떤 todo를 삭제해야 하는지 알아내기 : target 객체
    // console.log(event.target.parentElement);
    const delList = event.target.parentElement;
    delList.remove();
}

function paintTodo(newTodo) {
    // <li>, <span>, <button> 태그 만들고 span을 li안에 넣기
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);
    list.appendChild(span);
    list.appendChild(btn);

    todoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);