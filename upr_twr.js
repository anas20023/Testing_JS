var txt, cupr, clwr;

function get_text() {
  txt = document.getElementById("text").value;
}
function Upr() {
  if (txt == null) {
    alert("Dont Leave the field Empty !");
  }
  cupr = txt.toUpperCase();
  document.getElementById("change").innerHTML = cupr;
}
function Lwr() {
  if (txt == null) {
    alert("Dont Leave the field Empty !");
  }
  clwr = txt.toLowerCase();
  document.getElementById("change").innerHTML = clwr;
}
function Clr() {
  if (txt == null || cupr == null || clwr == null) {
    alert("Nothing to Clean !!");
  }
  document.getElementById("change").innerHTML = "";
}
function Lnt() {
  if (txt == null) {
    alert("Dont Leave the field Empty !");
  }
  document.getElementById("change").innerHTML = "Length is = " + txt.length;
}
