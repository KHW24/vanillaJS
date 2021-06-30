const images = ["0.jpeg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// bgImage.id = "backGround";
// html img 태그를 생성
bgImage.src = `img/${chosenImage}`;

// html에 body에 위에서 생성한 img 태그를 추가
// append 가장 뒤에, prepend 가장 위에 위치시킴
document.body.appendChild(bgImage);

