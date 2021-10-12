var timing = '{"past":-77993,"left":484793}';

$(document).ready(function() {
  var timingData = JSON.parse(timing);

  var timerElement = document.getElementById("mjc_timer");

  var timer = new GT_Timer();
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

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100">
//     <g class="base-timer__circle">
//       <circle class="circle_1" cx="50" cy="50" r="45"></circle>
//       <circle class="circle_2" cx="50" cy="50" r="38"></circle>
//       <circle class="circle_3" cx="50" cy="50" r="34"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="timer_path ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -40, 0
//           a 40,40 0 1,0 80,0
//           a 40,40 0 1,0 -80,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="timer_label" class="timer_label">${formatTime(timeLeft)}</span>
// </div>
// `;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(runTimer, 1000);
}

function runTimer() {
  timePassed = timePassed += 1;
  timeLeft = TIME_LIMIT - timePassed;
  document.getElementById("timer_label").innerHTML = formatTime(timeLeft);
  setCircleDasharray();
  setRemainingPathColor(timeLeft);

  if (timeLeft === 0) {
    onTimesUp();
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
