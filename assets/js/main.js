const box = document.getElementById("box");
const ball = document.getElementById("ball");
const boxSizeInput = document.getElementById("boxsize");
const ballSizeInput = document.getElementById("ballsize");
const ballColorInput = document.getElementById("ballcolor");
const boxColorInput = document.getElementById("boxcolor");
const step = 20;

function moveBall() {
  box.style.width = boxSizeInput.value + "px";
  box.style.backgroundColor = boxColorInput.value;
  ball.style.width = ballSizeInput.value + "px";
  ball.style.backgroundColor = ballColorInput.value;
}

function moveLeft() {
  let marLeft = ball.style.marginLeft ? parseInt(ball.style.marginLeft) : 0;
  if (marLeft - step >= 0) {
    ball.style.marginLeft = marLeft - step + "px";
  } else {
    ball.style.marginLeft = "0px";
  }
}

function moveRight() {
  let marLeft = ball.style.marginLeft ? parseInt(ball.style.marginLeft) : 0
  if (marLeft + step <= box.clientWidth - ball.clientWidth) {
    ball.style.marginLeft = marLeft + step + "px";
  }
  else {
    ball.style.marginLeft = box.clientWidth - ball.clientWidth + "px"
  }
}

function moveUp() {
  let marTop = ball.style.marginTop ? parseInt(ball.style.marginTop) : 0;
  if (marTop - step >= 0) {
    ball.style.marginTop = marTop - step + "px";
  } else {
    ball.style.marginTop = "0px";
  }
}

function moveDown() {
  let marTop = ball.style.marginTop ? parseInt(ball.style.marginTop) : 0;
  if (marTop + step <= box.clientHeight - ball.clientHeight) {
    ball.style.marginTop = marTop + step + "px";
  } else {
    ball.style.marginTop = box.clientHeight - ball.clientHeight + "px";
  }
}
// Klaviaturanin duymeleri ile yonlendirmek

// document.body.addEventListener("keyup", e => {
//   if (e.key == "ArrowRight") {
//     moveRight();
//   } else if (e.key == "ArrowLeft") {
//     moveLeft();
//   } else if (e.key == "ArrowDown") {
//     moveDown();
//   } else if (e.key == "ArrowUp") {
//     moveUp();
//   }
// });







