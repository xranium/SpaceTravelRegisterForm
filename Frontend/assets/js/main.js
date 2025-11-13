function visibility() {
  var menu1 = document.getElementById("show");
  if (menu1.className == "menu") {
    menu1.className += " visibility";
  } else {
    menu1.className = "menu";
  }
}

function Darkbutton() {
  var bars = document.getElementById("bars");
  if (bars.className == "fa-solid fa-bars") {
    bars.className += " dark-bars";
  } else {
    bars.className = "fa-solid fa-bars";
  }
}
