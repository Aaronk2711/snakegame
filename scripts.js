  var boxWidth = 400; //canvas width
  var boxHeight = 400; //canvas height
  var padding = 10; //canvas padding
  var snakePositionX = [10]; //x position of head
  var snakePositionY = [10]; //y position of head
  var snakeLength = 2;
  var applePositionX; //position of apple
  var applePositionY; //position of apple
  var direction; //direction the snake is moving
  var moveSnake;
  var gameStarted = false;
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
      gameStarted = true;
      beginButton.style.display = "none";
      gamePlay();
    }

    function gamePlay() {
      newApple();
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = "green";
      for (let c = 0; c < snakeLength; c++) {
        context.rect(snakePositionX[c], snakePositionY[c], 10, 10);
        context.fillStyle = "green";
        context.fill();
      }
      context.fillStyle = "green";
      context.fill();
      context.closePath();
      context.stroke();
    }

    document.onkeydown = function(e) {
      if (gameStarted === true) {
        switch (e.keyCode) {
          case 37:
            //left
            if (direction !== 'right') {
              direction = 'left';
              clearInterval(moveSnake);
              moveSnake = setInterval(moveSnakeLeft, 100);
              break;
            }

          case 38:
            //up
            if (direction !== 'down') {
              direction = 'up';
              clearInterval(moveSnake);
              moveSnake = setInterval(moveSnakeUp, 100);
              break;
            }

          case 39:
            //right
            if (direction !== 'left') {
              direction = 'right';
              clearInterval(moveSnake);
              moveSnake = setInterval(moveSnakeRight, 100);
              break;
            }

          case 40:
            //down
            if (direction !== 'up') {
              direction = 'down';
              clearInterval(moveSnake);
              moveSnake = setInterval(moveSnakeDown, 100);
              break;
            }
          }
    }
  }

    function newApple() {

      context.beginPath();
      context.lineWidth = "1";
      context.strokeStyle = "red";
      applePositionX = Math.floor((Math.random() * 150) + 200);
      applePositionX = Math.ceil(applePositionX/10) * 10;
      applePositionY = Math.floor((Math.random() * 340) + 10);
      applePositionY = Math.ceil(applePositionY/10) * 10;
      context.rect(applePositionX, applePositionY, 10, 10);
      context.fillStyle = "red";
      context.fill();
      context.closePath();
      context.stroke();
    }

    function redrawApple() {
      context.beginPath();
      context.lineWidth = "1";
      context.strokeStyle = "red";
      context.rect(applePositionX, applePositionY, 10, 10);
      context.fillStyle = "red";
      context.fill();
      context.closePath();
      context.stroke();
    }

    function moveSnakeLeft() {
      direction = 'left';
      if (snakePositionX[snakePositionX.length - 1] == 0) {
          endGame();
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1]);
        snakePositionX.push(snakePositionX[snakePositionX.length -1] - 10);
        if ((snakePositionX[snakePositionX.length - 1] == applePositionX) && (snakePositionY[snakePositionY.length - 1] == applePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (let i = 0; i < snakeLength; i++) {
          context.rect(snakePositionX[snakePositionX.length - 1 - i], snakePositionY[snakePositionY.length - 1 - i], 10, 10);
          context.fillStyle = "green";
          context.fill();
        }
        context.closePath();
        context.stroke();
        compare();
      }
    }

    function moveSnakeUp() {
      direction = 'up';
      if (snakePositionY[snakePositionY.length - 1] == 0) {
        endGame();
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1] - 10);
        snakePositionX.push(snakePositionX[snakePositionX.length -1]);
        if ((snakePositionX[snakePositionX.length - 1] == applePositionX) && (snakePositionY[snakePositionY.length - 1] == applePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (let i = 0; i < snakeLength; i++) {
          context.rect(snakePositionX[snakePositionX.length - 1 - i], snakePositionY[snakePositionY.length - 1 - i], 10, 10);
          context.fillStyle = "green";
          context.fill();
        }
        context.closePath();
        context.stroke();
        compare();

      }
    }

    function moveSnakeRight() {
      direction = 'right';
      if (snakePositionX[snakePositionX.length - 1] == 390) {
        endGame();
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1]);
        snakePositionX.push(snakePositionX[snakePositionX.length -1] + 10);
        if ((snakePositionX[snakePositionX.length - 1] == applePositionX) && (snakePositionY[snakePositionY.length - 1] == applePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (let i = 0; i < snakeLength; i++) {
          context.rect(snakePositionX[snakePositionX.length - 1 - i], snakePositionY[snakePositionY.length - 1 - i], 10, 10);
          context.fillStyle = "green";
          context.fill();
        }
        context.closePath();
        context.stroke();
        compare();
      }
    }

    function moveSnakeDown() {
      direction = 'down';
      if (snakePositionY[snakePositionY.length - 1] == 390) {
        endGame();
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1] + 10);
        snakePositionX.push(snakePositionX[snakePositionX.length -1]);
        if ((snakePositionX[snakePositionX.length - 1] == applePositionX) && (snakePositionY[snakePositionY.length - 1] == applePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (let i = 0; i < snakeLength; i++) {
          context.rect(snakePositionX[snakePositionX.length - 1 - i], snakePositionY[snakePositionY.length - 1 - i], 10, 10);
          context.fillStyle = "green";
          context.fill();
        }
        context.closePath();
        context.stroke();
        compare();
      }
    }

    function compare() {
      for (let k = 1; k < snakeLength -2; k++) {
        if ((snakePositionX[snakePositionX.length -1] == snakePositionX[snakePositionX.length -1 -k]) && (snakePositionY[snakePositionY.length -1] == snakePositionY[snakePositionY.length -1 -k])) {
          endGame();
        }
    }
  }

    function endGame() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      alert("You have died");
      snakePositionY.length = 0;
      snakePositionY.push(10);
      snakePositionX.length = 0;
      snakePositionX.push(10);
      snakeLength = 2;
      clearInterval(moveSnake);
      gameStarted = false;
      beginButton.style.display = 'block';
    }
