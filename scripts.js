var boxWidth = 400; //canvas width
  var boxHeight = 400; //canvas height
  var padding = 10; //canvas padding
  var snakePositionX = [10]; //position of head
  var snakePositionY = [10]; //position of head
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
      for (var c = 0; c < snakeLength; c++) {
        context.rect(snakePositionX[c], snakePositionY[c], 10, 10);
        console.log(c);
        context.fillStyle = "green";
        context.fill();
      }
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
            moveSnake = setInterval(moveSnakeLeft, 100);
            break;

        case 38:
            //up
            direction = 'up';

            clearInterval(moveSnake);
            moveSnake = setInterval(moveSnakeUp, 100);
            break;

        case 39:
            //right
            direction = 'right';

            clearInterval(moveSnake);
            moveSnake = setInterval(moveSnakeRight, 100);
            break;

        case 40:
            //down
            direction = 'down';

            clearInterval(moveSnake);
            moveSnake = setInterval(moveSnakeDown, 100);
            break;
    }
  }

    function newApple() {

      context.beginPath();
      context.lineWidth = "1";
      context.strokeStyle = "red";
      applePositionX = Math.floor((Math.random() * 150) + 200);
      applePositionY = Math.floor((Math.random() * 340) + 10);
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
      if (snakePositionX[snakePositionX.length - 1] === 0) {

      }
     else {
         context.clearRect(0, 0, canvas.width, canvas.height);
         redrawApple();
         snakePositionX.push(snakePositionX[snakePositionX.length - 1] - 10);
         if ((snakePositionX[snakePositionX.length - 1] === applePositionX) && (snakePositionY[snakePositionY.length - 1] === snakePositionY)) {
           snakeLength += 1;
           context.clearRect(0, 0, canvas.width, canvas.height);
           newApple();
         }
         context.beginPath();
         context.lineWidth = 1;
         context.strokeStyle = "green";
         for (var l = 0; l < snakeLength; l++) {
           context.rect(snakePositionX[l], snakePositionY[l], 10, 10);
           context.fillStyle = "green";
           context.fill();
           console.log(l);
         }
         context.closePath();
         context.stroke();



      }
    }

    function moveSnakeUp() {
      direction = 'up';
      if (snakePositionY[snakePositionY.length - 1] === 0) {

      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1] + 10);
        if ((snakePositionX[snakePositionX.length - 1] === applePositionX) && (snakePositionY[snakePositionY.length - 1] === snakePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (var u = 0; u < snakeLength; u++) {
          context.rect(snakePositionX[u], snakePositionY[u], 10, 10);
          context.fillStyle = "green";
          context.fill();
          console.log(u);
        }

        context.closePath();
        context.stroke();
      }
    }

    function moveSnakeRight() {
      direction = 'right';
      if (snakePositionX[snakePositionX.length - 1] === 390) {

      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionX.push(snakePositionX[snakePositionX.length - 1] + 10);
        if ((snakePositionX[snakePositionX.length - 1] === applePositionX) && (snakePositionY[snakePositionY.length - 1] === snakePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        for (var r = 0; r < snakeLength; r++) {
          context.rect(snakePositionX[r], snakePositionY[r], 10, 10);
          context.fillStyle = "green";
          context.fill();
          console.log(r);
        }
        context.closePath();
        context.stroke();
    }
    }

    function moveSnakeDown() {
      direction = 'down';
      if (snakePositionY[snakePositionY.length - 1] == 390) {

      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        redrawApple();
        snakePositionY.push(snakePositionY[snakePositionY.length - 1] + 10);
        if ((snakePositionX[snakePositionX.length - 1] == applePositionX) && (snakePositionY[snakePositionY.length - 1] == applePositionY)) {
          snakeLength += 1;
          context.clearRect(0, 0, canvas.width, canvas.height);
          newApple();
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "green";
        console.log("before loop");
        for (var d = 0; d < snakeLength; d++) {
          context.rect(snakePositionX[d], snakePositionY[d], 10, 10);
          console.log("in loop");
          console.log(snakePositionX[snakePositionX.length - 1]);
          console.log(snakePositionY[snakePositionY.length - 1]);
          context.fillStyle = "green";
          context.fill();
        }
        console.log("after loop");
        context.closePath();
        context.stroke();
      }
    }
