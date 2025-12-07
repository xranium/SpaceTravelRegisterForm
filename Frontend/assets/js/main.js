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
document.getElementById("question").addEventListener("submit" , function(e){
  e.preventDefault();

  const anwser = document.querySelector('input[name="quiz"]:checked');
  if (anwser){
    if (anwser.value === "Venus"){
      alert("Correct! Venus rotates in the opposite direction.")
    }else{
      alert("Wrong answer. Try again !")
    }
  }else{
    alert("Please select an option !")
  }


})
