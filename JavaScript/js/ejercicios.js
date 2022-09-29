/*jshint esversion: 6 */
let hoy = new Date();
const dias_semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

let dia = dias_semana[hoy.getDay()];
let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();

document.getElementById('dia').innerHTML = dia;
document.getElementById('hora').innerHTML = horas + ":" + minutos + ":" + segundos;

function imprimir() {
    window.print();
}

let mes = Number(hoy.getMonth());
let mes_actual = mes + 1;
document.getElementById('fecha').innerHTML = hoy.getFullYear() + "/" + mes_actual + "/" + hoy.getDate();

function area_triangulo() {
    let base = Number(document.getElementById('a1').value);
    let altura = Number(document.getElementById('b1').value);

    let area = (base * altura) / 2;

    document.getElementById('triangulo').innerHTML = area;
}

function areaTrianguloLados() {
    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);
    let perimetro = lado1 + lado2 + lado3;
    let semiperimetro = perimetro / 2;

    let areaTri = Math.sqrt((semiperimetro) * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));

    document.getElementById('res_tri').innerHTML = areaTri;
}

function anioBisiesto() {
    let anio = Number(document.getElementById('bisiesto').value);
    if ((anio % 4 == 0) && (anio % 100 != 0) || ((anio % 400 == 0))) {
        document.getElementById('res_bisiesto').innerHTML = anio + " es bisiesto";
    } else {
        document.getElementById('res_bisiesto').innerHTML = anio + " no es bisiesto";
    }
}

function anioDomingo() {
    let anio = Number(document.getElementById('anio_domingo').value);
    let anio_numero = new Date(anio,0,1);
    console.log(anio_numero);
    console.log(anio_numero.getDate());

    if ((anio_numero.getDate()==1)&&(anio_numero.getDay()==0)) {
        console.log("Este año si contiene un primero de enero como domingo");
    }else{
        console.log("El 1ero de enero no es domingo");
    }
}

function randomGuess(){
    let rand = Math.floor(Math.random()*11);//retorna un numero entre 1 y 19, el math floor es para redondear si sale decimal
    let num = Number(document.getElementById('num').value);
    resnum = rand==num? 'adivinaste!!':'siga participando :(, el numero era '+rand;
    document.getElementById('resnum').innerHTML = resnum;
}

function diasNavidad() {
    let presente = new Date();
    let anio_actual = presente.getFullYear();
    let navidad = new Date(anio_actual,11,25);
    let mes_actual = presente.getMonth();//typo de mierda
    let dia_actual = presente.getDate();
    //console.log(mes_actual);
    //let mes=0;
    let dias_navidad=[];
    for (let i = mes_actual; i <= navidad.getMonth(); i++) {
        let d = new Date(anio_actual,i+1,0);//esto por si solo da el ultimo dia del mes anterior
        console.log(i);
        console.log(d.getDate());
        dias_navidad.push(d.getDate());
    }
    console.log(dias_navidad);
    //obtener la primera posicion(mes actual) y restarle la fecha actual
    //obtener la fecha de navida y restarsela al ultimo mes(diciembre)
    //sumar los elementos del array y restarle los 2 lineas anteriormente comentadas
    //otra forma es usando array.reduce, pero meh
    let resta_mes_actual = dias_navidad[0]-dia_actual;
    let numero_dias_navidad = navidad.getDate();
    // tambien puede ser resta_navidad = 31-25;
    dias_navidad[0]= resta_mes_actual;
    dias_navidad[dias_navidad.length-1] = numero_dias_navidad;

    let suma_final=0;
    for (let j = 0; j < dias_navidad.length; j++) {
        suma_final = suma_final + dias_navidad[j];
    }
    console.log("Faltan "+suma_final+" dias para navidad");
    //console.log(resta_mes_actual);
    //console.log(resta_navidad);
    //console.log(dias_para_navidad);
    //console.log(navidad.getDay());
}