// declaring variables //
let select = 0; // select variable tracks which element for the rgba array will change when the mouse is clicked //
let size = 50; // the size of the square when initially drawn on the canvas //
let rgba = [300, 100, 200, 10]; // an array storing the rgba values to define its colour ([red, green, blue alpha]) //

// setup function //
function setup() {
  createCanvas(750, 750); // rendering a 600 by 500 pixel canvas //
  background(0); // black background //
  strokeWeight(10); // the width of the stroke/border around the square is set to 10 pixels //
}

// draw function //
function draw() {
  fill(rgba); // the fill/inside of the square is set to the rbga values declared above //
  rect(mouseX, mouseY, size, size); // drawing a square at the coordinates of the mouse on the canvas with mouseX and mouseY //
 
  if(select!=2){ // conditional/if statement changing the square in accordance with the value of 'select' //
    size = (50); // if 'select' isn't equal to 2, the square should change to 25 px //
  }
}

// mouse clicked event function //
function mouseClicked() {
  rgba[select] = random(0,255); //changing the 'select' value in the rgba array to any number (random) between 0 and 255 //
  rgba[3] = random(5,50); // setting the alpha value to any (random) number between 5 and 50 for a translucent effect
  select++; // adding the select variable to change to the next rgba element //

  console.log('select: '+select); // debugging - displaying the value of 'select' on the console //

  if(select >= rgba.length){ // conditional - if select is greater than/equal to the rgba array length, the select value is reset to 0 //
    console.log('reset select'); // logging this conditional onto the console //
    select = 0; // when select is reset to 0, the next click changes the red element of the rgba again //
  }
  
}

// mouse dragged event function //
function mouseDragged() {
    let lineHue = mouseX - mouseY; // calculating colour hue, based on the difference between the position of mouseX and mouseY on the canvas //
    stroke(lineHue, 200, 90); // setting 'stroke' colour hue based on the position of the mouse | (...,200, 90) control the saturation and brightness //
  }