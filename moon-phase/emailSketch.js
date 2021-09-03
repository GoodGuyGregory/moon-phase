
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

let fullName;
let subEmail;

// buttons
let backButton;
let submitButton;

function preload() {
  // fonts:
  // =============================================================
  ubuntuFont = loadFont('fonts/Ubuntu-Regular.ttf');
  righteousFont = loadFont('fonts/Righteous-Regular.ttf');

}

function collectDetails() {
  fullName = nameInput.value();
  subEmail = emailInput.value();

  console.log(`Sending to email ${subEmail} for ${fullName} `);
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

  let subscribe = createDiv('Enter your email to be informed of Moon Phase Changes:');


  // position set
  subscribe.position(400, 100);
  subscribe.style("height", "440px");
  subscribe.style("width", "640px");
  subscribe.style("padding", "40px");
  subscribe.style("margin", "10px");
  subscribe.style("border-radius", "15px");
  subscribe.style("display", "flex");
  subscribe.style("align-items", "center");
  subscribe.style("justify-content", "flex-start");
  subscribe.style("flex-direction", "column");
  subscribe.style("color", "#ffff");
  subscribe.style('font-family', 'Ubuntu');
  subscribe.style('font-size', '23px');
  subscribe.style("font-weight", "bold");
  subscribe.style("background", "rgb(131,58,180)");
  subscribe.style("background", "linear-gradient(180deg, rgba(131,58,180,1) 42%, rgba(253,29,29,1) 98%)");

  nameText = createP('Enter Your Full Name:');
  nameText.parent(subscribe);
  nameText.style("color", "#ffff");
  nameText.style("margin-top", "45px");
  nameText.style("font-size", "24px");

  nameInput = createInput('');
  nameInput.parent(subscribe);
  nameInput.size(200);
  nameInput.style("color", "black");
  nameInput.style("font-size", "20px");

  emailText = createP("Enter Your Email:");
  emailText.parent(subscribe);
  emailText.style("color", "#ffff");
  emailText.style("margin-top", "35px");
  emailText.style("font-size", "24px");


  emailInput = createInput('');
  emailInput.parent(subscribe);
  emailInput.size(400);
  emailInput.style("color", "black");
  emailInput.style("font-size", "20px");

  submitButton = createButton("Submit");
  submitButton.parent(subscribe);
  submitButton.style("font-family", "Righteous");
  submitButton.style("color", "#FFFF");
  submitButton.style("padding", "15px");
  submitButton.style("margin", "40px");
  submitButton.style("border-radius", "15px");
  submitButton.style("border", "none");
  submitButton.style("cursor", "pointer");
  submitButton.style("font-size", "20px");

}

function draw() {
  background(0);

  // console.log(`mouseX: ${mouseX}, mouseY: ${mouseY}`);

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



  if (mouseX >= 716 && mouseX < 810 && mouseY > 455 && mouseY < 512) {
    submitButton.style("background", "rgb(2,0,36)");
    submitButton.style("background", "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)");
    submitButton.style("cursor", "pointer");
    // button clicked
    if (mouseX >= 716 && mouseX < 810 && mouseY > 455 && mouseY < 512 && mouseIsPressed) {
      collectDetails();
    }
  }
  else {
    submitButton.style("background", "rgb(131,58,180)");
    submitButton.style("background", "linear-gradient(180deg, rgba(131,58,180,1) 42%, rgba(253,187,29,1) 98%)");
  }
  //  Add Stars to Canvas
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    ellipse(stars[i], positions[i], 5, 5);
  }














}



