const { arch } = require("os");

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// waxing gibbouse
function waxingGibbousMoon() {

    fill(0);
    stroke(255);
    strokeWeight(5);
    fill(255)
    ellipse(windowWidth / 2, windowHeight / 2, 450, 450);
    fill(0);
    arc(windowWidth / 2, windowHeight / 2, 450, 450, 0, 360, OPEN);
}

function newMoon() {
    fill(0);
    stroke(255);
    strokeWeight(5);
    fill(255)
    ellipse(windowWidth / 2, windowHeight / 2, 450, 450);
    fill(0);
    arc(windowWidth / 2, windowHeight / 2, 450, 450, 0, 2 * PI, OPEN);
}

function 

function draw() {
    background(15);

    //    development for moon phase here
    // waxingGibbousMoon();
    // newMoon();



}
