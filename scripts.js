  const canvas = document.getElementById('canvas');
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  function startGame() {
  document.getElementById("homescreen").style.backgroundColor = "blue";
  var homescreen = document.getElementById("homescreen");
  if (homescreen.style.display === "none") {
    homescreen.style.display = "block";
  } else {
    homescreen.style.display = "none";
  }

  var gamescreen = document.getElementById("gamescreen")
  if (gamescreen.style.display === "none" && homescreen.style.display === "none") {
    gameplay();
  }

  function gamePlay() {
    placeApple();
  }

  function placeApple() {

  }
}
