let unixTime;
let moonPhase;
let farmSenseInfo;
let currentMoonName;

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

  fullMoon = loadImage("./moonPhases/fullMoon.png");
  waningGibbousMoon = loadImage("./moonPhases/waningGibbousMoon.png");


}

async function getMoonPhase(unixtime) {

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

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  //  async wait time for unixTime to come through
  if (unixTime != undefined) {
    getMoonPhase(unixTime);
    if (moonPhase != undefined) {
      // create a moon object:
      let searchMoon = formatMoonReponse(moonPhase);
      console.log(searchMoon);
      console.log(currentMoonName);
      console.log(moonPhase);

      // TODO: display the moon image based on the parsed API 
      // response
      switch (searchMoon) {
        case 'fullMoon':
          image(fullMoon, 500, 100, 350, 350);
          break;
        case 'waningGibbousMoon':
          image(waningGibbousMoon, 500, 100, 350, 350);
        default:
          console.log(`no moon phase created yet for ${searchMoon}`);
      }


    }

  }
}
