function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function() {
      self.currentTime ++;
      self.setTime();
      printTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {   
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  if (this.currentTime === 0) {
      return 0;
  }
  return this.currentTime - this.setMinutes() * 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var formatNumber = ("0" + number).slice(-2);
  return formatNumber;
};

Chronometer.prototype.setTime = function () {
  var min = this.setMinutes();
  var s = this.setSeconds();
  var minutes = this.twoDigitsNumber(min);
  var seconds = this.twoDigitsNumber(s);
  return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };