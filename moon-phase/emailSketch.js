
// fonts:
let ubuntuFont;
let zCoolFont;

// Stars Array
let stars = [];
let positions = [];

// moon info
let subscribe;
let nameText;
let emailText;

// input values
let nameInput;
let emailInput;


// buttons
let backButton;
let submitButtons;

function preload() {
  // fonts:
  // =============================================================
  ubuntuFont = loadFont('fonts/Ubuntu-Regular.ttf');
  righteousFont = loadFont('fonts/Righteous-Regular.ttf');

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  //  Establish the Stars 
  for (let i = 0; i < 1050; i++) {
    stars[i] = random(-1200, 2200);
  }

  for (let j = 0; j < 1050; j++) {
    positions[j] = random(-1299, 900);

  }
}

function draw() {
  background(0);

  // create a button
  backButton = createA("./index.html", "Go Back");
  backButton.style("text-decoration", "none");
  backButton.position(45, 45);
  backButton.style("font-family", "Righteous");
  backButton.style("color", "#FFFF");
  backButton.style("padding", "20px");
  backButton.style("border-radius", "15px");
  backButton.style("border", "none");
  backButton.style("font-size", "20px");

  if (mouseX >= 39 && mouseX < 167 && mouseY > 37 && mouseY < 102) {

    backButton.style("background", "rgb(2, 0, 36)");
    backButton.style("background", "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)");
    backButton.style("cursor", "pointer");
  }
  else {
    backButton.style("background", "rgb(131,58,180)");
    backButton.style("background", "linear-gradient(180deg, rgba(131,58,180,1) 42%, rgba(253,29,29,1) 98%)");
  }

  //  Add Stars to Canvas
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    ellipse(stars[i], positions[i], 5, 5);
  }

  let subscribe = createDiv('Enter your email to be informed of Moon Phase Changes:');
  // position set
  subscribe.position(400, 100);
  subscribe.style("height", "540px");
  subscribe.style("width", "640px");
  subscribe.style("border-radius", "15px");
  subscribe.style("display", "flex");
  subscribe.style("align-items", "center");
  subscribe.style("justify-content", "center");
  subscribe.style("color", "#ffff");
  subscribe.style('font-family', 'Ubuntu');
  subscribe.style('font-size', '20px');
  subscribe.style("background", "rgb(131,58,180)");
  subscribe.style("background", "linear-gradient(180deg, rgba(131,58,180,1) 42%, rgba(253,29,29,1) 98%)");









}



