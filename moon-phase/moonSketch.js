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

// moon info
let detailText;

// buttons
let notifyMe;

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

  // create a button
  notifyMe = createA("./form.html", "Notify Me");
  notifyMe.style("text-decoration", "none");
  notifyMe.position(45, 45);
  notifyMe.style("font-family", "Righteous");
  notifyMe.style("color", "#FFFF");
  notifyMe.style("padding", "20px");
  notifyMe.style("border-radius", "15px");
  notifyMe.style("border", "none");
  notifyMe.style("font-size", "20px");

  if (mouseX >= 39 && mouseX < 167 && mouseY > 37 && mouseY < 102) {

    notifyMe.style("background", "rgb(2, 0, 36)");
    notifyMe.style("background", "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)");
    notifyMe.style("cursor", "pointer");
  }
  else {
    notifyMe.style("background", "rgb(131,58,180)");
    notifyMe.style("background", "linear-gradient(180deg, rgba(131,58,180,1) 42%, rgba(253,29,29,1) 98%)");
  }

  //  Add Stars to Canvas
  for (let i = 0; i < stars.length; i++) {
    fill(255);
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
          image(fullMoon, 400, 100, 450, 450);
          break;
        case 'waningGibbousMoon':
          image(waningGibbousMoon, 400, 100, 450, 450);
          break;
        case 'thirdQuarterMoon':
          image(thirdQuarterMoon, 400, 100, 450, 450);
          break;
        case 'waningCrescentMoon':
          image(waningCrescentMoon, 400, 100, 420, 420);
          break;
        case 'newMoon':
          image(newMoon, 400, 100, 450, 450);
          break;
        case 'waxingCrescentMoon':
          image(waxingCrescentMoon, 400, 100, 450, 450);
          break;
        case 'firstQuarterMoon':
          image(firstQuarterMoon, 400, 100, 450, 450);
          break;
        case 'waxingGibbousMoon':
          image(waxingGibbousMoon, 400, 100, 450, 450);
          break;
        default:
          console.log(`no moon phase created yet for ${searchMoon}`);
      }

      //  display lunar phase
      fill(255);
      textFont(righteousFont);
      textSize(50);
      textAlign(CENTER, CENTER);
      text(`${moonPhase} Moon`, 620, 600);
      // display moon name
      fill(255);
      textFont(righteousFont);
      textSize(50);
      text(`${currentMoonName}`, 1080, 100);
      // display info details


      fill(255);
      detailText = createP('This full moon corresponds with the time of harvesting corn. It is also called the Barley Moon, because it is the time to harvest and thresh the ripened barley. The Harvest Moon is the full moon nearest the autumnal equinox, which can occur in September or October and is bright enough to allow finishing all the harvest chores.');
      detailText.position(900, 100);
      detailText.style('font-family', 'Ubuntu');
      detailText.style('padding', '55px');
      detailText.style("color", "#ffff");
      // text(`${currentMoonName}`, 1140, 200);
      // TEST VALUES:
      //  Lunar Phase
      // console.log(searchMoon);
      // Moon Name for the Month
      // console.log(currentMoonName);

    }

  }


}
