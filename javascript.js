//selecting the character icon
const astronaut = document.querySelector("#astronaut")
let x = 0;
let y = 0;
// speed value
let speed = 15;
// window width
let windowWidth = window.innerWidth;
//window hight
let windowHeight = window.innerHeight;

document.body.addEventListener("keydown", go);
function go(e) {
    // key left
  if (e.keyCode === 37) {
    if (x > 0){
      // move left
      x -= speed;
      astronaut.style.left = x + "px";
      astronaut.style.transform = "rotate(270deg)";
    }
  } 
  //key up
  else if (e.keyCode === 38) {

    if (y > -220 ){
      //move up
      y -= speed;
      astronaut.style.top = y + "px";
      astronaut.style.transform = "rotate(-0deg)";
    }
  }
  // key right
   else if (e.keyCode === 39) {
    if(x + 225 < windowWidth){
      // move right
      x += speed;
      astronaut.style.left = x + "px";
      astronaut.style.transform = "rotate(90deg)";
    }
  } 
  //key down
  else if (e.keyCode === 40) {
    //move down
    if (y + 600 < windowHeight){

      y += speed; 
      astronaut.style.top = y + "px";
      astronaut.style.transform = "rotate(180deg)";
    }
  }
}
