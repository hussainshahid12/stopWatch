let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
function start() {
  timer = true;
  stopWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  sec = 0;
  min = 0;
  hr = 0;
  count = 0;
  document.getElementById("count").innerHTML = "0" + count;
  document.getElementById("sec").innerHTML = "0" + sec;
  document.getElementById("min").innerHTML = "0" + min;
  document.getElementById("hr").innerHTML = "0" + hr;
}

function stopWatch() {
  if (timer) {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    if (count == 100) {
      sec = sec + 1;

      count = 0;
    }
    if (sec == 60) {
      min = min + 1;

      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    sec < 10
      ? (document.getElementById("sec").innerHTML = "0" + sec)
      : (document.getElementById("sec").innerHTML = sec);
    min < 10
      ? (document.getElementById("min").innerHTML = "0" + min)
      : (document.getElementById("min").innerHTML = min);
    hr < 10
      ? (document.getElementById("hr").innerHTML = "0" + hr)
      : (document.getElementById("hr").innerHTML = hr);

    setTimeout(() => {
      stopWatch();
    }, 10);
  }
}
