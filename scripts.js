var boxWidth = 400;
var boxHeight = 400;
var padding = 10;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const beginButton = document.getElementById('beginningbutton');
drawBoard();
context.clearRect(0, 0, canvas.width, canvas.height);
  function drawBoard(){
    for (var x = 0; x <= boxWidth; x += 40) {
        context.moveTo(0.5 + x + padding, padding);
        context.lineTo(0.5 + x + padding, boxHeight + padding);
    }

    for (var x = 0; x <= boxHeight; x += 40) {
        context.moveTo(padding, 0.5 + x + padding);
        context.lineTo(boxWidth + padding, 0.5 + x + padding);
    }
    context.strokeStyle = "black";
    context.stroke();
}

  function buttonClicked() {
    beginButton.style.display = "none";
  }

  function gamePlay() {
    placeApple();
  }

  function placeApple() {

  }
