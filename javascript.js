// Selecting all the elements for the start button of the game
const startButtonContainer = document.querySelector("#startButtonContainer"); // Selecting the start button container
const startButtonColorLayer = document.querySelector("#startButtonColorLayer"); // Selecting the color layer of the start button
const startButton = document.querySelector("#startButton"); // Selecting the start button element

// Selecting the character (astronaut) element
const astronaut = document.querySelector("#astronaut");

// Selecting the SpaceStation element and container
const spaceStationContainer = document.querySelector("#spaceStationContainer"); // Selecting the container for the space station
const spaceStation = document.querySelector("#spaceStation"); // Selecting the space station element

// All the arrow keys selection
let arrowKeyQ = document.getElementById("arrowKeyQ"); // Selecting the Q arrow key button
let arrowKeyW = document.getElementById("arrowKeyW"); // Selecting the W arrow key button
let arrowKeyE = document.getElementById("arrowKeyE"); // Selecting the E arrow key button
let arrowKeyA = document.getElementById("arrowKeyA"); // Selecting the A arrow key button
let arrowKeyS = document.getElementById("arrowKeyS"); // Selecting the S arrow key button
let arrowKeyD = document.getElementById("arrowKeyD"); // Selecting the D arrow key button

// Function to add event listeners to various elements
function addEventListeners() {
  arrowKeyE.addEventListener("click", gameEnding); // Check for collision
  arrowKeyQ.addEventListener("click", touchDetectionAction); // Check for collision
  document.body.addEventListener("keydown", touchDetectionAction);
  startButton.addEventListener("click", startGame);
  document.addEventListener("click", missClickError);
}

// Add event listeners to elements
addEventListeners();

// Function to start the game
function startGame() {
  startButtonContainer.remove();
  startButton.remove();
  characterMovement(); // Call the function to initialize
}

// Function to handle errors when clicking outside the start button
function missClickError(e) {
  if (e.target !== startButton) {
    const startButtonAnimation = startButton.classList; // Select the classList of the text element
    startButtonAnimation.add("shake");
    setTimeout(() => {
      startButtonAnimation.remove("shake");
    }, 500);
  }
}

// Function to handle the game loop
function gameLoop() {
  touchDetectionAction(); // Check for collision
  requestAnimationFrame(gameLoop); // Call the loop again
}

// Start the game loop
gameLoop();

// Function to handle character movement
function characterMovement() {
  let x = 0;
  let y = 0;
  let speed = 15; // Speed value
  let windowWidth = window.innerWidth; // Window width
  let windowHeight = window.innerHeight; // Window height

  // Function to add event listeners for character movement
  function characterMovementEL() {
    document.body.addEventListener("keydown", movement);
    arrowKeyA.addEventListener("click", moveLeft);
    arrowKeyS.addEventListener("click", moveDown);
    arrowKeyD.addEventListener("click", moveRight);
    arrowKeyW.addEventListener("click", moveUp);
  }

  // Add event listeners for character movement
  characterMovementEL();

  // Function to handle movement based on key presses
  function movement(e) {
    // Key 'A' for moving left
    if (e.code === "KeyA") {
      moveLeft();
    }
    // Key 'W' for moving up
    else if (e.code === "KeyW") {
      moveUp();
    }
    // Key 'D' for moving right
    else if (e.code === "KeyD") {
      moveRight();
    }
    // Key 'S' for moving down
    else if (e.code === "KeyS") {
      moveDown();
    }
  }

  // Function to move left
  function moveLeft() {
    if (x > 0) {
      // Move left
      x -= speed;
      astronaut.style.left = x + "%";
      astronaut.style.transform = "rotate(270deg)";
    }
  }

  // Function to move right
  function moveRight() {
    if (x < 800) {
      // Move right
      x += speed;
      astronaut.style.left = x + "%";
      astronaut.style.transform = "rotate(90deg)";
    }
  }

  // Function to move up
  function moveUp() {
    if (y > -220) {
      // Move up
      y -= speed;
      astronaut.style.top = y + "%";
      astronaut.style.transform = "rotate(0deg)";
    }
  }

  // Function to move down
  function moveDown() {
    if (y + 500 < windowHeight) {
      // Move down
      y += speed;
      astronaut.style.top = y + "%";
      astronaut.style.transform = "rotate(180deg)";
    }
  }
}

// Function to handle collision detection and action
function touchDetectionAction(eButton) {
  const astronautRect = astronaut.getBoundingClientRect();
  const spaceStationRect = spaceStation.getBoundingClientRect();
  let eButtonAnimationE = arrowKeyE.classList;
  if (
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top
  ) {
    // Set button animation
    eButtonAnimationE.add("hintPress");
  } else {
    // Remove button animation
    eButtonAnimationE.remove("hintPress");
  }
  if (
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top &&
    eButton.code === "KeyE"
  ) {
    // Finish Game
    gameEnding();

    // Remove E button animation
    eButtonAnimationE.remove("hintPress");
  }
}

// Function to handle the game ending
function gameEnding() {
  astronaut.style.display = "none";
  setTimeout(() => {
    spaceStationContainer.style.transform = "rotate(90deg)";
    setTimeout(() => {
      spaceStationContainer.style.top = "-100%";
      setTimeout(() => {
        alert("You Are Winner");
      }, 1500);
    }, 1500);
  }, 1000);
}
