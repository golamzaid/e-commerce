// get all ids
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function getTimes() {
  const dates = new Date();

  let d = dates.getDate();
  let h = dates.getHours();
  let m = dates.getMinutes();
  let s = dates.getSeconds();

  if (d < 10) {
    day.innerHTML = "0" + d;
  }
  else {
    day.innerHTML = d;
  }

  if (h < 10) {
    hour.innerHTML = "0" + h;
  }
  else {
    hour.innerHTML = h;
  }

  if (m < 10) {
    minute.innerHTML = "0" + m;
  }
  else {
    minute.innerHTML = m;
  }

  if (s < 10) {
    second.innerHTML = "0" + s;
  }
  else {
    second.innerHTML = s;
  }
}

setInterval(() => {
  getTimes();
}, 1000);
