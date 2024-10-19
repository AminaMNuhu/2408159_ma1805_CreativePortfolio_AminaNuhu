// declaring varibles  //
let raindrops = []; // creating an empty array to store the raindrops //
let lightningFlash = false; // this variable is for tracking whether there's a flash. 'false' = no flash //
let flashTime = 0; // this variable is for storing the frameCount of the flashes and controlling when they stop by tracking the start time of the flash by frames //

function setup() {
  createCanvas(750, 500); // rendering a landscape canvas //
  for (let i = 0; i < 500; i++) { // a for loop (loop initialises 500 times = 500 raindrops intialised in the raindrops array) 
    raindrops.push(new Raindrop()); // each time it loops it should add a new raindrop object to the 'raindrops' array //
  }
}

// draw function to run the main code/animation //
function draw() {
  // if statement to run the code on the condition that if the flash appears for 5 frames once the lighting starts the background should be set to white //
  if (lightningFlash && frameCount < flashTime + 5) { 
    background(255, 255, 255); // white background/ lightning flash
  } else {
    background(25, 25, 112); // midnight blue sky background 
    lightningFlash = false; // if the condition is false the bg should be blue (the flash turns off in the next frame via 'lightingFlash = false) //
  }

  // this if statement/condition means there is a 2% chance (0.02) of it being true in each frame, //
  if (random(1) < 0.02) { // random(1) genreates a number between 1 and 0, if said no. is less than 0.02 the flashes are triggered //
    lightningFlash = true; // true = the lightning flashes are triggered 
    flashTime = frameCount; // flash time is set to the no. of frames since the code has ran 
  }

  // A for loop to draw and update all raindrops in thr raindrops array
  for (let drop of raindrops) {
    drop.update(); // calling the update method (movement/animation of the raindrops) //
    drop.show(); // calling the show medthod (drawing the raindrops) //
  }
}

// the raindrop class acts a template to define each raindrop // 
class Raindrop {
  // the constructor method runs each time a raindrop object is created and controls its properties //
  constructor() {
    this.x = random(width); // raindrops are put randomly arcoss the width (x-axis) of the canvas //
    this.y = random(-500, -100); // this y position causes the rainfall illusion as it is a negative y-value. so it's placed/begins above the canvas and out of sight //
    this.len = (10); // the length of the raindrops are set to 10 pixels
    this.yspeed = (10); // the speed of the rainfall is set to 10
  }
 
// upadate method controls the position of the raindrops on the canvas to create movememt 
  update() {
    this.y += this.yspeed; // moving the rain down the y-axis by increasing the y-position according to the y-speed to create a falling effect //
    if (this.y > height) { // condition = if the rain's y-position is below the canvas/ this.y is greater than the canvas height, the raindrop resets //
      this.y = random(-200, -100); // the position the raindrop is reset to (above canvas' bounds/ out of sight) //
      this.yspeed = random(4, 10); // speed set to random so each raindrop falls at a differing speed, reminiscent of real-life rain //
    }
  }

// show method to draw the rainsdrops onto the canvs 
  show() {
    stroke(225, 225, 225); // setting the rain lines to white 
    line(this.x, this.y, this.x, this.y + this.len); // drawing the lines vertically from 2 parallel points to create a raindrop, which starts at this.y and ends at this.len pixels below // 
  }
}


