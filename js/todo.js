const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    //console.log("i will paint", newTodo, newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSumit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSumit);