/*
fetch varibals
*/
const time_show = document.querySelector(".time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
//define variable
let seconds = 0;
let interval = null;

//Event Listener
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

/*
Update Timer
*/

function start() {
  if (interval) {
    return;
  }
  //clock motor
  interval = setInterval(() => {
    seconds++;
    let hr = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds - hr * 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }

    time_show.innerHTML = `${hr}:${minute}:${sec}`;
  }, 1000);
}
function stop() {
  clearInterval(interval);
  interval = null;
}
function reset() {
  stop();
  seconds = 0;
  time_show.innerHTML = "00:00:00";
}
const sunMoonContainer = document.querySelector(".sun-moon-container");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// function timer() {
//   // seconds++;
//   //formatiing seconds to minutes and hours
//   let hr = Math.floor(seconds / 3600);
//   let minute = Math.floor((seconds - hr * 3600) / 60);
//   let sec = seconds % 60;
//   if (sec < 10) {
//     sec = "0" + sec;
//   }
//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   if (hr < 10) {
//     hr = "0" + hr;
//   }

//   time_show.innerHTML = `${hr}:${minute}:${sec}`;
// }
