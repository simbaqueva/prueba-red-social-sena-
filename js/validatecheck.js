function myFunction() {

	var checkBox = document.getElementById("ayudante");

 if (checkBox.checked == true){

      var x = document.getElementById("ayudante").value;
  document.getElementById("registrarse").value = x;
  } 

  	var visitante = document.getElementById("visitante");

 if (visitante.checked == true){

      var y = document.getElementById("visitante").value;
  document.getElementById("registrarse").value = y;
  } 

  var victima = document.getElementById("victima");

 if (victima.checked == true){

      var z = document.getElementById("victima").value;
  document.getElementById("registrarse").value = z;
  }
  
}