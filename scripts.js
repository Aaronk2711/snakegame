var boxWidth = 400;
var boxHeight = 400;
var padding = 10;
var snakePositionX = 10;
var snakePositionY = 10;
var applePositionX;
var applePositionY;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var beginButton = document.getElementById('beginningbutton');
function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
drawBoard();
  function drawBoard(){
    for (var x = 0; x <= boxWidth; x += 40) {
        context.moveTo(0.5 + x + padding, padding);
        context.lineTo(0.5 + x + padding, boxHeight + padding);
    }

    for (var x = 0; x <= boxHeight; x += 40) {
        context.moveTo(padding, 0.5 + x + padding);
        context.lineTo(boxWidth + padding, 0.5 + x + padding);
    }
    context.fillStyle = "black";
    context.fill();
}

  function buttonClicked() {
    beginButton.style.display = "none";
    gamePlay();
  }

  function gamePlay() {
    newApple();
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "green";
    context.rect(snakePositionX, snakePositionY, 10, 10);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.stroke();
  }

  document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          //left
          if (snakePositionX === 0) {

          }
         else {
           context.clearRect(0, 0, canvas.width, canvas.height);
           snakePositionX = snakePositionX - 10;
           context.beginPath();
           context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(snakePositionX, snakePositionY, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
            redrawApple();
          }
          break;
      case 38:
          //up
          if (snakePositionY === 0) {

          }
          else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snakePositionY = snakePositionY - 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(snakePositionX, snakePositionY, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
            redrawApple();
          }
          break;
      case 39:
          //right
          if (snakePositionX === 400) {

          }
          else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snakePositionX = snakePositionX + 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(snakePositionX, snakePositionY, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
            redrawApple();
          }
          break;
      case 40:
          //down
          if (snakePositionY === 400) {

          }

          else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snakePositionY = snakePositionY + 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(snakePositionX, snakePositionY, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
            redrawApple();
          }
          break;
  }
}

  function newApple() {

    context.beginPath();
    context.lineWidth = "1";
    context.strokeStyle = "red";
    applePositionX = Math.floor((Math.random() * 350) + 200);
    applePositionY = Math.floor((Math.random() * 350) + 10);
    context.rect(Math.ceil(applePositionX/10)*10, Math.ceil(applePositionY/10)*10, 10, 10);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.stroke();
  }

  function redrawApple() {
    context.beginPath();
    context.lineWidth = "1";
    context.strokeStyle = "red";
    context.rect(Math.ceil(applePositionX/10)*10, Math.ceil(applePositionY/10)*10, 10, 10);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.stroke();
  }
