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
