// variables for circle //
let cx = 50; // circle x position (initial starting position before mouse movement )
let cy = 50; // circle y position (initail starting position before mouse movement )
let r = 60; // circle radius (initial size before arrow)
let mouseIsClicked = false; // variable for the mouse click event, checking if the mouse is clicked to change the colour of the circle) 

// variables for square //
let sx = 100; // square x position
let sy = 250; // square y position 
let sw = 150; // square width
let sh = 150; // square height

// setup function //
function setup() {
  createCanvas(700, 500); // rendering a 700 by 500 pixel canvas 
  stroke(225, 225, 225); // white outline/stroke for the circle and square 
  strokeWeight(10); // 10px heavy border
}

// draw function //
function draw() {
  background(0); // black background
  
  cx = mouseX; // altering the circles position according to the mouse's x coordinate
  cy = mouseY; // altering the circles position according to the mouse's y coordinate

  // conditionals to change the colour of the circle to pink when the user clicks the mouse
  if (mouseIsClicked) {
    fill(300, 0, 255); // pink
  } else {
    fill(300, 150, 50); // orange (initial colour)
  }

  ellipse(cx, cy, r * 2); // setting the circle to its pre-defined dimensions and then the mouse position
  
  let hit = circleSquare(cx, cy, r, sx, sy, sw, sh); // checking for a collision between the circle and square's positions

  // Colour conditionals for square
  if (mouseIsPressed) {
    fill(0, 255, 150); // changing the sqaure to green when the mouse is clicked 
  } else if (hit) {
    fill(250, 0, 0); // changing the square to red when a collision is detected
  } else {
    fill(0, 150, 255); // blue (initial colour)
  }

  rect(sx, sy, sw, sh); // setting the suare to its pre-defined dimensions (the square is static and will not be moved by any events)
}

// function to detect/check circle and square collisions //
function circleSquare(cx, cy, rad, rx, ry, rw, rh) {
  // variables to detect the coordinates of the square closest to the circle 
  let findX = cx; //x-position
  let findY = cy; //y-position 
  
  // conditions to find the closest collision point of the square on the x-axis //
  if (cx < rx) findX = rx; // left point 
  else if (cx > rx + rw) findX = rx + rw; // right point

  // conditions to find the closest collision point of the square on the y-axis //
  if (cy < ry) findY = ry; // top point
  else if (cy > ry + rh) findY = ry + rh; // bottom point
  
  let d = dist(cx, cy, findX, findY); // variable to calculate the distance between the circle's radius and the closest point of the square
  
  // conditions to detect a collision based on the distance being less than/equal to the radius of the circle
  if (d <= rad) {
    return true; // collision detected 
  }
  return false; // collision not detected 
}

// Event listener for the mouse click to control the circle's colour
function mouseClicked() {
  mouseIsClicked = !mouseIsClicked; 
}

// Event listener for key press to control the circle's size according to conditions 
function keyPressed() {
  if (key === 'ArrowUp') {
    r += 10; // increasing the circle's radius by 10 px when the up arrow is pressed
  } else if (key === 'ArrowDown') {
    r = max(10, r - 10); // decreasing thr circle's radius by 10 px when the down arrow is pressed (max is set to 10px, so the circle doesn't decrease below 10px, to remain visible)
  }
}
