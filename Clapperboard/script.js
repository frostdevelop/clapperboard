function author() {
  nam = document.getElementById("name").value
  document.getElementById("text").innerHTML = "Director: " + nam;
}
function prod() {
  nam = document.getElementById("prodtxt").value
  document.getElementById("prod").innerHTML = "Prod. " + nam;
}
let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
fulla = cMonth + "/" + cDay + "/" + cYear
fullc = cDay + "/" + cMonth + "/" + cYear
function mdy() {
  document.getElementById("date").innerHTML = fulla
}
function dmy() {
  document.getElementById("date").innerHTML = fullc
}
function timer() {
cent = 0
sec = 0
min = 0
hour = 0
}
function timermotion() {
  reset = 0
  speed = setInterval('timehandle()', 10)
}
function timehandle() {
  cent++
  if (cent > 99) {
    cent = 0
    sec++
  }
  if (sec > 59) {
    sec = 0
    min++
  }
  if (min > 59) {
    min = 0
    hour++
  }
  if (reset > 0) {
    clearInterval(speed);
    timer()
  }
  document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec + ":" + cent
}
function HSf() {
  hs = document.getElementById("hs")
  inputs = document.getElementById("inputs")
  if (hs.value == "Hide") {
    orj = inputs.innerHTML
    inputs.innerHTML = '<input type="button" id="hs" class="name" onclick="HSf()" value="Show"/>'
  }
  if (hs.value == "Show") {
    inputs.innerHTML = orj
  }
}
function load() {
 document.body.className = "fade"
 document.getElementById("header").className = "flip"
 document.getElementById("hs").className = "name"
}
notifs = " "
function prom(text) {
  document.getElementById("notif").innerHTML = document.getElementById("notif").innerHTML + '<p class = "notifs" onclick = "resetp()">' + text + '</p>'
  setTimeout("resetp()", 10000)
}
function resetp() {
  var notif1 = document.getElementById('notif')
  var notif2 = notif1.querySelector('p')
  notif1.removeChild(notif2)
}