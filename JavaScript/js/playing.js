hola1("futbol","XD")

function hola1(texto1, texto2) {
  console.log(`${texto1} es ${texto2}`);
}
//una arrow function con una sola linea, se asume que el valor siempre se retorna
let hola2 = (texto3,texto4) => console.log(`Todos son ${texto3}${texto4}`);
hola2("fu","rros");

// para cuando existe un solo parametro, se pueden borrar los parentesis
let suma1 = numero => numero * Math.PI;
console.log(suma1(24).toFixed(3));

//si quieres crear un metodo o una funcion que no usa parametros, siempre se debe dejar el ()
//que indica que la funcion no requiere parametros
const randomico = () => {return Math.random()};
console.log(randomico());

document.getElementById('sinArrow').addEventListener('click', function () {
  console.log("Haz clickeado el boton sin arrow function")
})

//puedes usar funciones dentro de otras funciones, sin declarar
document.getElementById('conArrow').addEventListener('dblclick', () => console.log("doble click!"));


class Auto {
  constructor(fabricante,objetos,cosas,placas) {
    this.fabricante = fabricante;
    this.objetos = objetos;// al parecer asi le das un array
    this.cosas = cosas;
    this.placas = Array.isArray(placas) ? placas : [];
  }
  Drive(){
    console.log("Conduce!")
  }
}

let Subaru = new Auto("Citroen",["agua","flores"],{celular: "samsung"},[24,56])
console.log(Subaru);









//no puedes acceder a una variable antes de su inicializacion (duh)
//