/*jshint esversion: 6 */
let personas = [
  { nombre: "David", trabajo: "Jugar", edad: 22 },
  { nombre: "Pedro", trabajo: "Jugar", edad: 23 },
];
function crearCabeceraTabla(tabla, datos) {
  let cabecera = tabla.createTHead();
  let fila = cabecera.insertRow();
  for (let x of datos) {
    let th = document.createElement("th");
    let texto = document.createTextNode(x);
    th.appendChild(texto);
    fila.appendChild(th);
  }
}

function crearTabla(tabla, datos) {
  for (let elemento of datos) {
    let fila = tabla.insertRow();
    for (let z in elemento) {
      let celda = fila.insertCell();
      let texto = document.createTextNode(elemento[z]);
      celda.appendChild(texto);
    }
  }
}

let tabla = document.getElementById("tablita");
let datos = Object.keys(personas[0]);
crearTabla(tabla,personas);
crearCabeceraTabla(tabla, datos);
