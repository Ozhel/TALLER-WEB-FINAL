document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("refri").addEventListener("click", function() {
      crearRectangulo("Refri 2");
  });

  document.getElementById("refri2").addEventListener("click", function() {
      crearRectangulo("Refri 2");

  });
  document.getElementById("refri3").addEventListener("click", function() {
    crearRectangulo("Refri 2");

});
document.getElementById("refri4").addEventListener("click", function() {
  crearRectangulo("Refri 2");
});
document.getElementById("refri5").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri6").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri7").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri8").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
});

function crearRectangulo(nombre) {
  var rectangulo = {
      nombre: nombre, 
      width: "300px",
      height: "300px",
      backgroundColor: "#ffffff"
  };

  
  var rectangulos = JSON.parse(localStorage.getItem("rectangulos")) || [];
  rectangulos.push(rectangulo);
  localStorage.setItem("rectangulos", JSON.stringify(rectangulos));
  console.log("Rectángulo creado: " + nombre);
}
