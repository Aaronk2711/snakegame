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
