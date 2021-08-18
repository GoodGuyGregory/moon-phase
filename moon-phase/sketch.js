let unixTime;
let moonPhase;
let farmSenseInfo;
let currentMoonName;

let clientMoon = new Moon();

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
  background(15);
  //  async wait time for unixTime to come through
  if (unixTime != undefined) {
    getMoonPhase(unixTime);
    if (moonPhase != undefined) {
      // create a moon object:
      let clientMoon = new Moon(500);
      let searchMoon = formatMoonReponse(moonPhase)
      clientMoon[searchMoon]();

    }

  }
  // console.log(currentMoonName);
}
