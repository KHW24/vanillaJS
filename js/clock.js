// 호출하려는 대상, 5초 뒤 실행
//setInterval(getClock, 5000);  - 5초 경과마다 계속 생성
//setTimeout(getClock, 5000);   - 5초 경과후 1번만 생성

// padStart(number, String); - 앞쪽에 String을 넣어줌
//                           - number: 원하는 글자수, String: 들어갈 문자

const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 시간을 바로 보이기 위해 호출
setInterval(getClock, 1000);