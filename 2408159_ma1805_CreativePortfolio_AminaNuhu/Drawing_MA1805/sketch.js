// setup function //
function setup() {
    // rendering the canvas and the JavaScript Web Graphics Library (WEBGL) for 3D graphics //
    createCanvas (600, 600, WEBGL);
}

//draw function //
function draw() {
// blue background //
    background(100, 200, 250);

// grey motorway //
    fill(90, 90, 90);
    rect(-230, -300, 250, 600);

// white lane lines //
    fill(225, 225, 255);
    rect(-115, -350, 20, 100);
    rect(-115, -200, 20, 100);
    rect(-115, -50, 20, 100); 
    rect(-115, 100, 20, 100); 
    rect(-115, 250, 20, 100);
    
// black traffic light head //
    fill(0);
    rect(50, -200, 100, 260);

// black traffic light pole //
    fill(0);
    rect(85, 10, 30, 300); 

// green circle //
    fill(0, 300, 0);
    ellipse(100, -130, 60);

// yellow circle //
    fill(255, 200, 0);
    ellipse(100, -60, 60); 

// red circle //
    fill(255, 0, 0);
    ellipse(100, 10, 60); 
    
// green sphere//
    push(); // push function to limit the transformations to the specific shape (green sphere)
    translate(100, -130, -14); 
    fill(0, 300, 0);
    rotateY(frameCount * 0.02); 
    rotate(frameCount * 0.2); 
    sphere(30);
    pop(); // pop function does the same thing as the push function

    // not adding these functions means the green sphere's translate function affects the subsequent spheres//
    // push() and pop() act almost as an opening and closing statement for each shape //
     
// yellow sphere //
    push();
    translate(100, -60, -14); // translate function for 3D shape positioning on the canvas //
    fill(225, 200, 0);
    // frameCount set at 0 = no X aixs movement //
    rotateX(frameCount * 0); // frameCount variable tracks no. of frames once the draw function starts //
    rotate(frameCount * 0.03); // the higher the count the faster the shape rotates
    sphere(30);
    pop();

// red sphere //
    push();
    translate(100, 10, -14); // a -14 z axis makes the circles behind the spheres visible enough to act as outlines/borders to add more visual dimension //
    fill(255, 0, 0);
    rotateX(frameCount * 0.02); // also controls the speed at which each shape rotates on the X axis //
    rotate(frameCount * 0.2); 
    sphere(30); // 30 is the px radius of every sphere (the 2D circles behind them are 60px (in diameter) to match) //
    pop()

// stop sign pole //
    fill(192, 192, 192);
    rect(187, 200, 25, 100);

// stop sign //
    push();
    stroke(225, 225, 225);
    strokeWeight(5);
    fill(300, 0, 0);
    ellipse(200, 150, 130);
    fill(225, 225, 225);
    rect(155, 135, 90, 30);
    pop();

}
