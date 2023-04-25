function inner() {
    document.getElementById('inner').innerHTML = 'usando innerHTML'
}
function ventana(){
    window.alert("Usando window.alert")
    //aunque no es necesario usar window, tambien sirve solo alert()
}
function consola(){
    console.log("console.log es la mejor de estas opciones")
}
let $dolar = "variable con el signo dolar";
var $$$$ = "Esto igual es valido al parecer";
let ___JS___ = 42; 
console.log(Object.keys({$$$$})[0]);

document.getElementById("numStringButton").addEventListener("click",()=>{
    document.getElementById("numAndString").innerHTML = 10.45465+"blablab"});

console.log(2<<2);
console.log(this);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num * this.multiplier);
  console.log(this===window);
}, { multiplier: 10 });
/* en resumen, el forEach acepta un thisArg que permite cambiar el scope del this que se va a usar
    aunque en dicho caso solo se pueden usar funciones normales, y no asi funciones flecha.
    ya que las funciones flecha apuntan al this del scope que rodea al lugar donde fue declarada, en este caso a window
*/

function Counter() {// funciones como constructores
    this.count = 0;
  
    setInterval(function() {
      this.count++;
      console.log(this.count);
      console.log(this == window);
    }.bind(this), 1000);// usamos bind para unir el this de Counter con la funcion actual
  }
  /*
  Al usar una funcion normal como callback del setInterval, se la toma como una funcion en solitario, lo que quiere decir que no 
  apunta al this del Counter, si no al this global, por eso se usa una funcion flecha que apunta al scope(enfoque) mas exterior
  siendo en este caso el de Counter, e imprimiendo los valores correctos
  */
  


  // tambien al parecer algunos metodos built-in the js bindean el this cuando usas una callback function al objeto, global 
  // no se si todos los metodos, pero habra que ver
  //const counter = new Counter();

//   const myObj = {
//     currentCount: 0,
//     startTimer: function() {
//       setInterval(()=>{
//         this.currentCount++;
//         console.log(this.currentCount);
//       }, 1000);
//     }
//   };
  
//   myObj.startTimer();


//TODO::ordenar este codigo

const celular = {
    marca: "xiaomi",
    llamar: function(){// funcion anonima
      console.log("llamando desde "+this.marca);
    }
  }
celular.llamar();



function cadenaArreglo() {
  let texto = "lambda, es, muy, buena funcion, total";
  let separador = String(document.getElementById("separadorCadena").value);
  let arregloConvertido = texto.split(separador);
  document.getElementById("cadena").innerHTML = arregloConvertido;
  console.log(arregloConvertido);
  console.log(separador);
}


let pablo = "Pablito clavo un clavito en la calva de un calvito";
let objetoIterable = pablo.matchAll("ito");
console.log(objetoIterable.next());


document.getElementById('btnLiterals').addEventListener('click',()=>{
  let cabecera = "Plantillas de literales";
  let etiquetas = ["tag","literales","flutter"];
  let html = `<h2>${cabecera}</h2>`;
  for(const x of etiquetas){
    html = html+`<li>${x}</li>`;
  }
  html+= `</ul>`;
  document.getElementById('demoLiterals').innerHTML = html;
});
document.getElementById('btnLiterals').addEventListener('dblclick',()=>{
  document.getElementById('demoLiterals').innerHTML = "";
})

/*
This seems to be a valid approach, but its less efficient because the
browser has to re-render the element, whereas if you just change the
element's style it won't reload
*/

/* 
GPT Solution
document.getElementById("toggleButton").addEventListener("click", function() {
	var x = document.getElementById("htmlContent");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
});

nice
*/