$(function() {
  initStats(50000);
  setTimeout(() => initStats(100000), 1500);
});

function initStats(initialValue) {
  var stat = $("<span>").addClass("number-effect");
  setInterval(() => {
    stat.text(`+${initialValue++}₮`);
  }, 1);

  showStats();

  function showStats() {
    stat.css("top", getRandomInt(50, 580) + "px");
    stat.css("left", getRandomInt(10, 90) + "%");

    $("body").prepend(stat);

    setTimeout(() => {
      stat.remove();
      setTimeout(showStats, 500);
    }, 3010);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
