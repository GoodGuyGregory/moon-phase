// Load UnixTime form API:
//  https://showcase.api.linx.twenty57.net/UnixTime/tounix?date=now

let unixTime;
let moonPhase;
let farmSenseInfo;
let currentMoonName;

//  runs before sketch
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

async function getMoonPhase() {

  let farmSenseUrl = 'https://api.farmsense.net/v1/moonphases/?d=' + "1629291094";

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
  background(15);
}




function draw() {
  getMoonPhase();
  console.log(unixTime);
  console.log(moonPhase);
  console.log(currentMoonName);
}