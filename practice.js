var boxWidth = 400; //canvas width
var boxHeight = 400; //canvas height
var padding = 10; //canvas padding
var snakePositionX = 10; //position of head
var snakePositionY = 10; //position of head
var snakeLength = 1;
var applePositionX; //position of apple
var applePositionY; //position of apple
var direction; //direction the snake is moving
var moveSnake;

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
          direction = 'left';

          clearInterval(moveSnake);
          moveSnake = setInterval(moveSnakeLeft, 50);
          break;

      case 38:
          //up
          direction = 'up';

          clearInterval(moveSnake);
          moveSnake = setInterval(moveSnakeUp, 50);
          break;

      case 39:
          //right
          direction = 'right';

          clearInterval(moveSnake);
          moveSnake = setInterval(moveSnakeRight, 50);
          break;

      case 40:
          //down
          direction = 'down';

          clearInterval(moveSnake);
          moveSnake = setInterval(moveSnakeDown, 50);
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

  function moveSnakeLeft() {
    direction = 'left';
    if (snakePositionX === 0) {

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
  }

  function moveSnakeUp() {
    direction = 'up';
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
  }

  function moveSnakeRight() {
          direction = 'right';
    if (snakePositionX === 390) {

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
  }

  function moveSnakeDown() {
    direction = 'down';
    if (snakePositionY === 390) {

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
  }
