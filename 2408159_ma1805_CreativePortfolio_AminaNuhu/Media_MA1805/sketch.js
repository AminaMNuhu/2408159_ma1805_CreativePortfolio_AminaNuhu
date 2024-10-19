// declaring variables //
let frame = 1; // the initial frame will be frame 1 //
let bgMusic; // variable for bg song //
let bgMusicFrameOne; // variable for frame one's bg audio //

// preload function to preload all image asset files //
function preload() {
    // character assets //
    img1 = loadImage("Blinkkk.png");
    img2 = loadImage("LeftEye.png");
    img3 = loadImage("RightEye.png");
    // musical note assets //
    img4 = loadImage("TREBLECLEF.png");
    img5 = loadImage("QUAVER.png");
    img6 = loadImage("BeamedQuavers.png");
}

// setup function to render canvas and load audio asset files //
function setup() {
    createCanvas(600, 600); // rendering a 600 by 600 px canvas //
    background(0); // black background //
    frameOne(); // frameOne will be called/ran first//

    // loading background audio for frame 1//
    bgMusicFrameOne = new Audio("ambience.mp3");
    // looping background music for frame 1 //
    bgMusicFrameOne.loop = true; 
    // loading background music //
    bgMusic = new Audio("music.mp3");
    // looping background music //
    bgMusic.loop = true; 
}

// draw function to run each frame and its designated audio logic //
function draw() {
    // if statements/conditionals running and displaying each frame consecutively (from frame 1 to the 12th and final frame) for a stop-motion animation effect //
    if (frame == 1) {
        frameOne();
    } else if (frame == 2) {
        frameTwo();
    } else if (frame == 3) {
        frameThree();
    } else if (frame == 4) {
        frameFour();
    } else if (frame == 5) {
        frameFive();
    } else if (frame == 6) {
        frameSix();
    } else if (frame == 7) {
        frameSeven();
    } else if (frame == 8) {
        frameEight();
    } else if (frame == 9) {
        frameNine();
    } else if (frame == 10) {
        frameTen();
    } else if (frame == 11) {
        frameEleven();
    } else if (frame == 12) {
        frameTwelve();
    }

    // playing the bg audio for frame 1 //
    if (frame == 1) {
        if (!bgMusicFrameOne.isPlaying) { // checking frame 1's bg music isn't playing //
            bgMusicFrameOne.play(); // playing frame 1's bg music //
            bgMusicFrameOne.isPlaying = true; // declaring 'true' so the play method does not need to be triggered again //
        }
        if (bgMusic.isPlaying) { // checking if the secondary bg music is playing //
            bgMusic.pause(); // pausing the secondary bg music if it has been triggered to play //
            bgMusic.isPlaying = false; // subsequently declaring its playing status 'false' //
        }
    }
    // if statements/conditionals running/playing the bg music only between frames 3 and 12 //
    else if (frame >= 3 && frame <= 12) {
        if (!bgMusic.isPlaying) { // checking the secondary bg music isn't already playing //
            bgMusic.play(); // playing the music from frame 3 to 12 //
            bgMusic.isPlaying = true; // declaring its playing status as 'true' so the play method doesn't repeat itself //
        }
        if (bgMusicFrameOne.isPlaying) { 
            bgMusicFrameOne.pause(); // pausing frame 1's music to avoid an audio clash //
            bgMusicFrameOne.isPlaying = false;
        }
    }
    // pausing the music in all the irrelevant frames //
    else {
        if (bgMusic.isPlaying) {
            bgMusic.pause();
            bgMusic.isPlaying = false;
        }
        if (bgMusicFrameOne.isPlaying) {
            bgMusicFrameOne.pause();
            bgMusicFrameOne.isPlaying = false;
        }
    }
}

// the following functions are for each frame of the animation. Each frame contains either the same or different and modified (by pixel coordinates or size) image assets. This is to simulate movement, just as a stop-motion animation would do. // 

// function for frame 1 //
function frameOne() {
    background(0); // black background //
    image(img1, -50, -70, 700, 700); 
}

//function for frame 2 //
function frameTwo() {
    background(187, 222, 251); // background set to rgb values matching the image assets' background colour //
    image(img2, 200, 200, 400, 400); 
}

// function for frame 3 //
function frameThree() {
    background(187, 222, 251);
    image(img3, 200, 200, 400, 400); 
}

// function for frame 4 //
function frameFour() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 200, 100, 100); 
}

// function for frame 5 //
function frameFive() {
    background(187, 222, 251);
    image(img3, 200, 200, 400, 400); 
    image(img4, 150, 200, 100, 100); 
    image(img5, 100, 150, 100, 100); 
}

// function for frame 6 //
function frameSix() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 200, 100, 100); 
    image(img5, 100, 150, 100, 100); 
    image(img6, 5, 110, 100, 100);
}

// function for frame 7 //
function frameSeven() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 200, 100, 100); 
    image(img5, 100, 150, 100, 100); 
    image(img6, 5, 110, 100, 100); 
}

// function for frame 8 //
function frameEight() {
    background(187, 222, 251);
    image(img3, 200, 200, 400, 400); 
}

// function for frame 9 //
function frameNine() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 150, 150, 150); 
}

// function for frame 10 //
function frameTen() {
    background(187, 222, 251);
    image(img3, 200, 200, 400, 400); 
    image(img4, 150, 150, 150, 150); 
    image(img5, 80, 100, 180, 180); 
}

// function for frame 11 //
function frameEleven() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 150, 150, 150); 
    image(img5, 80, 100, 180, 180); 
    image(img6, 5, 0, 150, 150);
}

// function for frame 12 //
function frameTwelve() {
    background(187, 222, 251);
    image(img2, 200, 200, 400, 400); 
    image(img4, 150, 150, 150, 150); 
    image(img5, 80, 100, 180, 180); 
    image(img6, 5, 0, 150, 150); 
}

// mouse pressed function to make the 'stop-motion' animation effect clickable/controllable //
function mousePressed() {
    frame = (frame + 1) % 12; // each time the mouse is pressed on the canvas the frame variable goes up by 1, moving on to the next frame until the 12th and final frame //
}