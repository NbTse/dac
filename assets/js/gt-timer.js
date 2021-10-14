var timing = '{"past":-77993,"left":484793}';

$(document).ready(function() {
  console.log("Hello world!!!asdfasdfasdf");

  var dateStart = new Date("2021-10-01 00:00:00:000");
  var dateFinish = new Date("2021-10-18 00:00:00:000");
  var dateCurrent = new Date();

  console.log("Start: ", dateStart);
  console.log("Finish: ", dateFinish);
  console.log("Current: ", dateCurrent);

  var timer = new GT_Timer();
  // var timingData = JSON.parse(timing);
  var timingData = {
    past: timer.getTimeDiffBySeconds(dateStart, dateCurrent),
    left: timer.getTimeDiffBySeconds(dateCurrent, dateFinish),
  };

  console.log(timingData);

  var timerElement = document.getElementById("mjc_timer");

  if (dateFinish < dateCurrent) {
    timingData.left = 0;
  }

  timer.init({
    timerElement: timerElement,
    past: timingData.past,
    left: timingData.left,
  });
  timer.startTimer();
});

var GT_Timer = function() {};

GT_Timer.prototype.options = {
  pathLength: 283,
};

GT_Timer.prototype.runner = null;

GT_Timer.prototype.bySeconds = {
  past: 0,
  left: 0,
};

GT_Timer.prototype.timing = {
  day: {
    past: 0,
    left: 0,
  },
  hour: {
    past: 0,
    left: 0,
  },
  minute: {
    past: 0,
    left: 0,
  },
  second: {
    past: 0,
    left: 0,
  },
};

GT_Timer.prototype.elements = {
  day: null,
  hour: null,
  minute: null,
  second: null,
};

GT_Timer.prototype.init = function(options) {
  var self = this;

  self.elements.day = options.timerElement.getElementsByClassName("day")[0];
  self.elements.hour = options.timerElement.getElementsByClassName("hour")[0];
  self.elements.minute = options.timerElement.getElementsByClassName(
    "minute"
  )[0];
  self.elements.second = options.timerElement.getElementsByClassName(
    "second"
  )[0];

  self.elements.day.innerHTML = self.getGraphicHTML("DAYS");
  self.elements.hour.innerHTML = self.getGraphicHTML("HOURS");
  self.elements.minute.innerHTML = self.getGraphicHTML("MINUTES");
  self.elements.second.innerHTML = self.getGraphicHTML("SECONDS");

  self.bySeconds.past = options.past;
  self.bySeconds.left = options.left;

  self.options.pathLength = 251;
};

GT_Timer.prototype.getTimeDiffBySeconds = function(date1, date2) {
  var diff = date2.getTime() - date1.getTime();
  return Math.abs(Math.round(diff / 1000));
};

GT_Timer.prototype.convertSeconds = function() {
  var self = this;

  var past = self.bySeconds.past;
  var left = self.bySeconds.left;

  self.timing.second.past = past % 60;
  self.timing.second.left = left % 60;

  past = Math.floor(past / 60);
  left = Math.floor(left / 60);

  self.timing.minute.past = past % 60;
  self.timing.minute.left = left % 60;

  past = Math.floor(past / 60);
  left = Math.floor(left / 60);

  self.timing.hour.past = past % 24;
  self.timing.hour.left = left % 24;

  self.timing.day.past = Math.floor(past / 24);
  self.timing.day.left = Math.floor(left / 24);
};

GT_Timer.prototype.startTimer = function() {
  var self = this;
  self.runner = setInterval(
    function() {
      self.runTimer();
    }.bind(self),
    1000
  );
};

GT_Timer.prototype.runTimer = function() {
  var self = this;

  if (self.bySeconds.left <= 0) {
    self.onTimesUp();
    return;
  }

  self.bySeconds.past = self.bySeconds.past + 1;
  self.bySeconds.left = self.bySeconds.left - 1;

  self.convertSeconds();

  self.updateLabels();

  self.setCircleDasharray();

  // setRemainingPathColor(timeLeft);
};

GT_Timer.prototype.onTimesUp = function() {
  var self = this;
  clearInterval(self.runner);
  self.runner = null;
};

GT_Timer.prototype.calculateTimeFraction = function(val, fractionCount) {
  var rawTimeFraction = val / fractionCount;
  return rawTimeFraction - (1 / fractionCount) * (1 - rawTimeFraction);
};

GT_Timer.prototype.updateLabels = function() {
  var self = this;
  var timerLabel;

  timerLabel = self.elements.second.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = `${self.timing.second.left}`;

  timerLabel = self.elements.minute.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = `${self.timing.minute.left}`;

  timerLabel = self.elements.hour.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = `${self.timing.hour.left}`;

  timerLabel = self.elements.day.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = `${self.timing.day.left}`;
};

GT_Timer.prototype.setCircleDasharray = function() {
  var self = this;

  var pathElement;
  var circleDasharray;
  var fraction;

  fraction = self.calculateTimeFraction(self.timing.second.left, 60);
  circleDasharray = `${(fraction * self.options.pathLength).toFixed(0)} ${
    self.options.pathLength
  }`;
  pathElement = self.elements.second.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(self.timing.minute.left, 60);
  circleDasharray = `${(fraction * self.options.pathLength).toFixed(0)} ${
    self.options.pathLength
  }`;
  pathElement = self.elements.minute.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(self.timing.hour.left, 24);
  circleDasharray = `${(fraction * self.options.pathLength).toFixed(0)} ${
    self.options.pathLength
  }`;
  pathElement = self.elements.hour.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(
    self.timing.day.left,
    self.timing.day.left + self.timing.day.past
  );
  circleDasharray = `${(fraction * self.options.pathLength).toFixed(0)} ${
    self.options.pathLength
  }`;
  pathElement = self.elements.day.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);
};

GT_Timer.prototype.getGraphicHTML = function(unit) {
  var self = this;
  return `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100">
    <g class="base-timer__circle">
      <circle class="circle_1" cx="50" cy="50" r="45"></circle>
      <circle class="circle_2" cx="50" cy="50" r="38"></circle>
      <circle class="circle_3" cx="50" cy="50" r="34"></circle>
      <path
        stroke-dasharray="${self.pathLength}"
        class="timer_path green"
        d="
          M 50, 50
          m -40, 0
          a 40,40 0 1,0 80,0
          a 40,40 0 1,0 -80,0
        "
      ></path>
    </g>
  </svg>
  <div class="timer_label">
    <div class="timer_value">0</div>
    <div class="timer_unit">${unit}</div>
  </div>
</div>
`;
};
