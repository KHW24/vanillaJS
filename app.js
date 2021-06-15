 
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name")
//     }else if(username.length > 15){
//         alert("Your name is too long.");
//     }
// }

// loginButton.addEventListener("click",onLoginBtnClick);

const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


const link = document.querySelector("a");

// 세 번째
function onLoginSubmit(event){
    // 브라우저가 기본 동작을 실행하지 못하게 함
    event.preventDefault();  
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreeting(username);
    
}

// 네 번째
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 첫 번째 - JS가 USERNAME_KEY를 가지고 local storage를 확인
const saveUsername = localStorage.getItem("USERNAME_KEY");  

// 두 번째 
if(saveUsername === null){
    // show the form
    loginFrom.classList.remove(HIDDEN_CLASSNAME);
    loginFrom.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    // 다섯 번째 - 새로 고침시 localStorage에서 가져온 값으로 대입
    paintGreeting(saveUsername);
}


