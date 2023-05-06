const box = document.getElementById("box");
const ball = document.getElementById("ball");
const boxSizeInput = document.getElementById("boxsize");
const ballSizeInput = document.getElementById("ballsize");
const stepInput = document.getElementById("step");
const ballColorInput = document.getElementById("ballcolor");
const boxColorInput = document.getElementById("boxcolor");

function moveBall() {
  box.style.width = boxSizeInput.value + "px";
box.style.backgroundColor = boxColorInput.value;
ball.style.width = ballSizeInput.value + "px";
ball.style.backgroundColor = ballColorInput.value;
}
    
// Not asagidaki funksiyalarda sehvler var amma yazmaga calisdim

// function moveLeft() {
//   const stepLength = parseInt(stepInput.value);
//   const currentLeft = parseInt(ball.style.left);
//   const newLeft = currentLeft - stepLength;
//   if (newLeft <= (box.style.width - ball.style.width)) {
//     ball.style.left = stepInput.value + "px";
//   }
// }
// function moveRight() {
//   const stepLength = parseInt(stepInput.value);
//   const currentRight = parseInt(ball.style.right);
//   const newRight = currentRight + stepLength;
//   if (newRight <= (box.style.width - ball.style.width)) {
//     ball.style.right = stepInput.value + "px";
//   }
// }
// function moveUp() {
//   const stepLength = parseInt(stepInput.value);
//   const currentTop = parseInt(ball.style.top);
//   const newTop = currentTop - stepLength;
//   if (newTop < 300) {
//     ball.style.top = stepInput.value + "px";
//   }
// }
// function moveDown() {
//   const stepLength = parseInt(stepInput.value);
//   const currentBottom = parseInt(ball.style.bottom);
//   const newBottom = currentBottom + stepLength;
//   if (newBottom <300) {
//     ball.style.bottom = stepInput.value + "px";
//   }
// }







