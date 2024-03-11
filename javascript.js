// Selecting the character icon
const astronaut = document.querySelector("#astronaut");
let x = 0;
let y = 0;
// Speed value
let speed = 15;
// Window width
let windowWidth = window.innerWidth;
// Window height
let windowHeight = window.innerHeight;

let arrowKeyW = document.getElementById("arrowKeyW");
let arrowKeyA = document.getElementById("arrowKeyA");
let arrowKeyS = document.getElementById("arrowKeyS");
let arrowKeyD = document.getElementById("arrowKeyD");

function EventListener() {
  document.body.addEventListener("keydown", movement);
  arrowKeyA.addEventListener("click", moveLeft);
  arrowKeyS.addEventListener("click", moveDown);
  arrowKeyD.addEventListener("click", moveRight);
  arrowKeyW.addEventListener("click", moveUp);
}
EventListener();

function movement(e) {
  // Key 'A' for moving left
  if (e.key === "a") {
    moveLeft();
  }
  // Key 'W' for moving up
  else if (e.key === "w") {
    moveUp();
  }
  // Key 'D' for moving right
  else if (e.key === "d") {
    moveRight();
  }
  // Key 'S' for moving down
  else if (e.key === "s") {
    moveDown();
  }
}
// left function
function moveLeft() {
  if (x > 0) {
    // Move left
    x -= speed;
    astronaut.style.left = x + "%";
    astronaut.style.transform = "rotate(270deg)";
  }
}
//right function
function moveRight() {
  if (x < 800) {
    // Move right
    x += speed;
    astronaut.style.left = x + "%";
    astronaut.style.transform = "rotate(90deg)";
  }
}
// up function
function moveUp() {
  if (y > -220) {
    // Move up
    y -= speed;
    astronaut.style.top = y + "%";
    astronaut.style.transform = "rotate(0deg)";
  }
}
//down function
function moveDown() {
  if (y + 500 < windowHeight) {
    // Move down
    y += speed;
    astronaut.style.top = y + "%";
    astronaut.style.transform = "rotate(180deg)";
  }
}
