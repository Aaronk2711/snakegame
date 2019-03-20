var boxWidth = 400;
var boxHeight = 400;
var padding = 10;
var xPosition = 10;
var yPosition = 10;
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
    firstApple();
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "green";
    context.rect(xPosition, yPosition, 10, 10);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.stroke();
  }

  document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          //left
          if (xPosition === 0) {

          }
         else {
           context.clearRect(xPosition + 5, yPosition + 5, 6, 6);
           xPosition = xPosition - 10;
           context.beginPath();
           context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(xPosition, yPosition, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
          }
          break;
      case 38:
          //up
          if (yPosition === 0) {

          }
          else {
            context.clearRect(xPosition + 5, yPosition + 5, 6, 6);
            yPosition = yPosition - 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(xPosition, yPosition, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
          }
          break;
      case 39:
          //right
          if (xPosition === 400) {

          }
          else {
            context.clearRect(xPosition + 5, yPosition + 5, 6, 6);
            xPosition = xPosition + 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(xPosition, yPosition, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
          }
          break;
      case 40:
          //down
          if (yPosition === 400) {

          }

          else {
            context.clearRect(xPosition + 5, yPosition + 5, 6, 6);
            yPosition = yPosition + 10;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "green";
            context.rect(xPosition, yPosition, 10, 10);
            context.fillStyle = "green";
            context.fill();
            context.closePath();
            context.stroke();
          }
          break;
  }
}
  
  function firstApple() {
  
    context.beginPath();
    context.lineWidth = "6";
    context.strokeStyle = "red";
    context.rect(Math.floor((Math.random() * 350) + 200), Math.floor((Math.random() * 350) + 10), 10, 10);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.stroke();
  }
  
  function placeApple() {
    context.beginPath();
    context.lineWidth = "6";
    context.strokeStyle = "red";
    context.rect(Math.floor((Math.random() * 390) + 10), Math.floor((Math.random() * 390) + 10), 10, 10);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.stroke();
  }
