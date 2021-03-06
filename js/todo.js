const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// JavaScript의 object나 array 등을 String으로 변환
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // 무엇이 클릭되는지 확인
    //console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    console.log(typeof li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// 화면에 ToDo를 나타내주는 기능
function paintToDo(newTodo){
    //console.log("i will paint", newTodo, newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSumit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // JavaScipt에서 사용 가능한 Object로 변환
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

    //parsedToDos.forEach((item)  => console.log("this is the turn of", item));
    // function sayHello(item){
    //     console.log("this is the turn of", item);
    // }
}
 
