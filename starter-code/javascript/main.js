var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains("start")){
      btnLeft.classList.add('stop');
      btnLeft.classList.remove('start');
      btnLeft.innerText = "STOP";
      chronometer.startClick();
      btnRight.classList.add("split");
      btnRight.classList.remove("reset");
      btnRight.innerText = "SPLIT";
  } else {
      btnLeft.classList.add('start');
      btnLeft.classList.remove('stop');
      btnLeft.innerText = "START";
      chronometer.stopClick();
      btnRight.classList.add("reset");
      btnRight.classList.remove("split");
      btnRight.innerText = "RESET";
  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var olist = document.getElementById("splits");
  if (btnRight.classList.contains("split")) {
    var timing = chronometer.setTime();
    var newLi = document.createElement("li");
    newLi.innerText = timing[0] + ":" + timing[1];
    olist.appendChild(newLi);
  } else {
    for(var x=0; document.querySelector("li"); x++){
      var list = document.querySelector("li");
      olist.removeChild(list);
    }
    chronometer.resetClick();
    printTime();
  };
});

function printTime() {
  var timing = chronometer.setTime();
  var secondsRigth = document.getElementById("secUni");
  var secondsLeft = document.getElementById("secDec");
  var minutesRigth = document.getElementById("minUni");
  var minutesLeft = document.getElementById("minDec");
  var minutes = timing[0];
  var seconds = timing[1];
  secondsRigth.innerText = seconds[1];
  secondsLeft.innerText = seconds[0];
  minutesRigth.innerText = minutes[1];
  minutesLeft.innerText = minutes[0];
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

