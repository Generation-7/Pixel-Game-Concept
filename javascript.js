const astronaut = document.querySelector("#astronaut");
const spaceStation = document.querySelector("#spaceStation");
const spaceStationContainer = document.querySelector("#spaceStationContainer");
// Selecting the character icon
let arrowKeyQ = document.getElementById("arrowKeyQ");
let arrowKeyW = document.getElementById("arrowKeyW");
let arrowKeyE = document.getElementById("arrowKeyE");
let arrowKeyA = document.getElementById("arrowKeyA");
let arrowKeyS = document.getElementById("arrowKeyS");
let arrowKeyD = document.getElementById("arrowKeyD");

function gameLoop() {
  requestAnimationFrame(gameLoop); // Call the loop again
}

// Start the game loop
gameLoop();

function characterMovement() {
  let x = 0;
  let y = 0;
  // Speed value
  let speed = 15;
  // Window width
  let windowWidth = window.innerWidth;
  // Window height
  let windowHeight = window.innerHeight;
  
  function EventListener() {
    arrowKeyE.addEventListener("click", gameOut); // Check for collision
    arrowKeyQ.addEventListener("click", touchDetectionAction); // Check for collision
    document.body.addEventListener("keydown", movement);
    document.body.addEventListener("keydown", touchDetectionAction);
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
}

characterMovement(); // Call the function to initialize

function touchDetectionAction(eButton) {
  const astronautRect = astronaut.getBoundingClientRect();
  const spaceStationRect = spaceStation.getBoundingClientRect();
  let eButtonAnimationE = arrowKeyE.classList;
  let eButtonAnimationQ = arrowKeyQ.classList;
  if (
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top
  ) {
    //set button animation
    eButtonAnimationE.add("hintPress");
    eButtonAnimationQ.add("hintPress");
  } else {
    // remove button animation
    eButtonAnimationE.remove("hintPress");
    eButtonAnimationQ.remove("hintPress");
  }
  if (
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top &&
    eButton.key === "e"
  ) {
    // finish Game
    gameOut();

    // Remove Q button and E button animation
    eButtonAnimationE.remove("hintPress");
    eButtonAnimationQ.remove("hintPress");
  }
  if (
    // if click Q 
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top &&
    eButton.key == "q"
  ) {
    
  }
}




// if click Q 






function gameOut() {
  const astronautRect = astronaut.getBoundingClientRect();
  const spaceStationRect = spaceStation.getBoundingClientRect();
  if (
    astronautRect.left < spaceStationRect.right &&
    astronautRect.right > spaceStationRect.left &&
    astronautRect.top < spaceStationRect.bottom &&
    astronautRect.bottom > spaceStationRect.top
  ) {
    astronaut.style.display = "none";
    setTimeout(() => {
      spaceStationContainer.style.transform = "rotate(90deg)";
      setTimeout(() => {
        spaceStationContainer.style.top = "-100%";
        setTimeout(() => {
          alert("You Are Winner")
          
        }, 1500);
      }, 1500);
    }, 1000);
    
  }
}
