// 할일 목록 localstorage에 저장. key는 고유+랜덤에 가까운 Date.getDate() 를 사용한다.
// Todo 클릭시 저장된 할일 목록을 화면에 보여준다.
// checkbox 체크시 텍스트위에 취소선
// 삭제클릭시 화면에서삭제 + localstorage 목록에서 삭제
// main focus for today -> 1개짜리 main todo. check시 밑에 칭찬문구 보여줌
const mainFocusBox = document.getElementById("mainFocus");
const mainFocusForm = document.querySelector("#mainFocus form");
const mainFocusInput = mainFocusForm.querySelector("input");
const mainFocusDiv = document.getElementById("todaysFocus");
const mainFocusSpan = document.querySelector("#todaysFocus span:last-of-type");
const mainFocusCheck = document.getElementById("mainFocusCheckbox");
const mainFocusDelBtn = mainFocusDiv.querySelector("button");

const todoBtn = document.getElementById("todoBtn");
const todoListBox = document.getElementById("todoListBox");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");

const linksBtn = document.getElementById("links");
const linkBox = document.getElementById("linkBox");

const MAINFOCUSKEY = "todaysMainFocus";
const TODOS_KEY = "todos";

function mainFocusSubmitHandler(event) {
    event.preventDefault();
    if(mainFocusInput.value === ""){
        return;
    } else {
        localStorage.setItem(MAINFOCUSKEY, mainFocusInput.value);
        showMainFocus();
    }
}
function checkLineThroughHandler(event) {
    const targetSpan = event.target.parentNode.querySelector("span:last-of-type");
    if(event.target.checked) {
        targetSpan.style.textDecoration = "line-through";
    } else {
        targetSpan.style.textDecoration = "";
    }
}
function deleteMainFocus() {
    localStorage.removeItem(MAINFOCUSKEY);
    mainFocusInput.value = "";
    mainFocusCheck.checked = false;
    mainFocusSpan.style.textDecoration = "";
    showMainFocus();
}

// todays main Focus
function showMainFocus() {
    const mainFocus = localStorage.getItem(MAINFOCUSKEY);
    if(mainFocus === null) {
        mainFocusDiv.classList.add("hidden1");
        mainFocusForm.classList.remove("hidden1");

        mainFocusForm.addEventListener("submit", mainFocusSubmitHandler);
    }
    else {
        mainFocusDiv.classList.remove("hidden1");
        mainFocusForm.classList.add("hidden1");

        mainFocusSpan.innerText = mainFocus;
        mainFocusCheck.addEventListener("click", checkLineThroughHandler);
        mainFocusDelBtn.addEventListener("click", deleteMainFocus);
    }
}

showMainFocus();

// show lonk Box
function showLinkBoxHandler() {
    linkBox.classList.toggle("hidden1");
}
linksBtn.addEventListener("click", showLinkBoxHandler);

// show Todo box
function showTodoListBoxHandler() {
    todoListBox.classList.toggle("hidden1");
}
todoBtn.addEventListener("click", showTodoListBoxHandler);

// todo list
let toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteTodo(event) {
    const delList = event.target.parentElement;
    delList.remove();
    toDos = toDos.filter( todo => todo.id !== parseInt(delList.id) );
    saveTodos();
}
function paintTodo(newTodoObj) {
    // <li>, <span>, <button> 태그 만들고 span을 li안에 넣기
    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener("click", checkLineThroughHandler);
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);
    list.appendChild(checkbox);
    list.appendChild(span);
    list.appendChild(btn);

    todoList.appendChild(list);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        id : Date.now(),   
        text : newTodo
    };
    toDos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(li => {
        paintTodo(li);
    });
}