window.onload = function () {
  var appendMinutes = document.getElementById("minutes");
  var appendSeconds = document.getElementById("seconds");
  var appendMiliseconds = document.getElementById("miliseconds");
  var buttonStart = document.getElementById("startBtn");
  var buttonStop = document.getElementById("stopBtn");
  var buttonReset = document.getElementById("resetBtn");

  var totalMilliseconds = 0;
  var Interval;

  function startTimer() {
    totalMilliseconds+=10;

    var minutes = Math.floor((totalMilliseconds / 1000 / 60) % 60);
    var seconds = Math.floor((totalMilliseconds / 1000) % 60);
    var milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

    appendMinutes.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    appendSeconds.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    appendMiliseconds.innerHTML = (milliseconds < 10 ? "0" : "") + milliseconds;
  }

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    totalMilliseconds = 0;
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMiliseconds.innerHTML= "00";
  };
};
