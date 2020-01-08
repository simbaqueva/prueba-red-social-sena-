function chat() {
  var x = document.getElementById("overlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  };

   var y = document.getElementById("buttonchat");
  if (y.style.top === "584px") {
    y.style.top = "226px";
  } else {
    y.style.top = "584px";
  };
}