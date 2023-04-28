const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    // stringify : 객체를 json string화시켜줌. localStorage에 string형으로만 저장가능하기 때문.
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.parse();    // json string을 객체로 변환해줌 (string -> array)
}

function deleteTodo(event) {
    // 같은 list들 중 어떤 todo를 삭제해야 하는지 알아내기 : target 객체
    // console.log(event.target.parentElement);
    const delList = event.target.parentElement;
    delList.remove();
    // console.log(delList.id);
    // filter를 사용해 array에서 삭제될 todo를 제외한 array를 재구성하기
    toDos = toDos.filter( todo => todo.id !== parseInt(delList.id) );
    saveTodos();
}

function paintTodo(newTodoObj) {
    // <li>, <span>, <button> 태그 만들고 span을 li안에 넣기
    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
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

    const newTodoObj = {
        id : Date.now(),    //고유한 id를 부여하기 위해 밀리초단위로 바뀌는 now()사용
        text : newTodo
    };
    toDos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleToDoSubmit);

// 새로고침시 toDos[]는 빈값이 되기때문에, 저장되어있던 list가 사라지지 않도록 toDos[]에 새로 추가
// 과거 저장된 list 표시해주기
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(li => {
        paintTodo(li);
    });
}

// Object.filter() 함수 사용법
// 배열객체.filter(각각요소처리할함수);     /   배열객체.filter( x => return x !== 1 );
// filter 함수 인자로 Object 안의 요소들에게 각각 실행할 함수를 받는다. / 람다표기 가능
// filter()의 인자함수는 배열의 요소들을 인자함수에 각각 대입해 boolean 리턴값을 받는다.
// 인자함수의 리턴값 : 각 요소를 새 배열에 포함하고싶다면 true / 제외하고 싶다면 false를 반환
// filter() 함수는 걸러진 요소들로 새 배열을 구성해 반환한다. (기존배열 변경X)