let unixTime;
let moonPhase;
let farmSenseInfo;
let currentMoonName;


// fonts:
let ubuntuFont;
let zCoolFont;

// Stars Array
let stars = [];
let positions = [];

//  MoonImage
let newMoon;
let waxingCrescentMoon;
let firstQuarterMoon;
let waxingGibbousMoon;
let fullMoon;
let waningGibbousMoon;
let lastQuarterMoon;
let waningCresentMoon;


//  runs before sketch
// Load UnixTime from API:
function preload() {
  // Get current unixtime from API
  let unixTimeUrl = 'https://showcase.api.linx.twenty57.net/UnixTime/tounix?date=now';

  // get current Unix time for farmsense API
  httpGet(unixTimeUrl, 'json', function (response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    unixTime = response;
  }, function (error) {
    console.log("callback error getting current unix time" + error);
  });

  // moon images:
  // =============================================================
  fullMoon = loadImage("./moonPhases/fullMoon.png");
  waningGibbousMoon = loadImage("./moonPhases/waningGibbousMoon.png");
  thirdQuarterMoon = loadImage("./moonPhases/thirdQuarterMoon.png");
  waningCrescentMoon = loadImage("./moonPhases/waningCrescentMoon.png");
  newMoon = loadImage("./moonPhases/newMoon.png");
  waxingCrescentMoon = loadImage("./moonPhases/waxingCresentMoon.png");
  firstQuarterMoon = loadImage("./moonPhases/firstQuarterMoon.png");
  waxingGibbousMoon = loadImage("./moonPhases/waxingGibbousMoon.png");

  // fonts:
  // =============================================================
  ubuntuFont = loadFont('fonts/Ubuntu-Regular.ttf');
  righteousFont = loadFont('fonts/Righteous-Regular.ttf');
}

function getMoonPhase(unixtime) {

  let farmSenseUrl = 'https://api.farmsense.net/v1/moonphases/?d=' + unixtime;

  httpGet(farmSenseUrl, function (farmsense) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    farmSenseInfo = JSON.parse(farmsense);
    //  parse moonPhase
    moonPhase = farmSenseInfo[0].Phase;
    // parse moonName
    currentMoonName = farmSenseInfo[0].Moon[0];
  }, function (error) {
    console.log("callback error getting current unix time" + error);
  });
}


function getMoonInfo(moonName) {

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


function formatMoonReponse(incomingMoonPhase) {
  let lowerCaseFirstParam = "";
  let secondUpperCaseParam = "";
  let firstSpaceValue = incomingMoonPhase.indexOf(' ');
  lowerCaseFirstParam = incomingMoonPhase.substring(0, firstSpaceValue);
  // removes spaces
  incomingMoonPhase = incomingMoonPhase.replace(/\s/g, '');
  lowerCaseFirstParam = lowerCaseFirstParam.toLowerCase();
  // console.log(lowerCaseFirstParam);
  secondUpperCaseParam = incomingMoonPhase.substring(firstSpaceValue, moonPhase.length);

  // final string 
  // "<lowercase>" + <uppercaseletters> + "Moon"
  let searchParameter = lowerCaseFirstParam + secondUpperCaseParam + "Moon";
  // console.log(searchParameter);
  return searchParameter;
}



function draw() {
  background(0);

  //  Add Stars to Canvas
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i], positions[i], 5, 5);
  }

  //  async wait time for unixTime to come through
  if (unixTime != undefined) {
    getMoonPhase(unixTime);
    if (moonPhase != undefined) {
      // find the moon from the response data method
      let searchMoon = formatMoonReponse(moonPhase);

      // TODO: display the moon image based on the parsed API 
      // response
      switch (searchMoon) {
        case 'fullMoon':
          image(fullMoon, 500, 100, 450, 450);
          break;
        case 'waningGibbousMoon':
          image(waningGibbousMoon, 500, 100, 450, 450);
          break;
        case 'thirdQuarterMoon':
          image(thirdQuarterMoon, 500, 100, 450, 450);
          break;
        case 'waningCrescentMoon':
          image(waningCrescentMoon, 450, 100, 420, 420);
          break;
        case 'newMoon':
          image(newMoon, 500, 100, 450, 450);
          break;
        case 'waxingCrescentMoon':
          image(waxingCrescentMoon, 500, 100, 450, 450);
          break;
        case 'firstQuarterMoon':
          image(firstQuarterMoon, 500, 100, 450, 450);
          break;
        case 'waxingGibbousMoon':
          image(waxingGibbousMoon, 500, 100, 450, 450);
          break;
        default:
          console.log(`no moon phase created yet for ${searchMoon}`);
      }

      //  display lunar phase
      fill(255);
      textFont(righteousFont);
      textSize(50);
      textAlign(CENTER, CENTER);
      text(`${moonPhase} Moon`, 650, 600);

      // display moon name
      fill(255);
      textFont(righteousFont);
      textSize(50);
      text(`${currentMoonName}`, 1140, 100);
      // display info details
      fill(255);
      textFont(ubuntuFont);
      textSize(20);
      // text(`${currentMoonName}`, 1140, 200);
      // TEST VALUES:
      //  Lunar Phase
      // console.log(searchMoon);
      // Moon Name for the Month
      // console.log(currentMoonName);

    }
  }
}
