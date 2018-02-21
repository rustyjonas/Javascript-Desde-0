/*
* Las funciones son bloques de codigo reutilizables
*
*  function nombreFuncion(parametro1,parametro2,parametro3....){
*       //codigo
*  }
*
*/

function sumar(a,b){
    return a + b;
}
let miSuma = sumar(1,5);
console.log(miSuma) //6


/******* Ejecutar funciones *******/

let obj = {
    nombre : 'objeto',
    suma(a,b){
        return a + b;
    }
}
let miOtrasuma = obj.suma(2,3);
console.log(miOtrasuma);


/******* Funcion dentro de otra funcion *******/

function restar(a) {
    return function (b) {
        return a -b
    }
}
let miResta = restar(5)(3);
console.log(miResta) //--> 2

/******* Funcion autoinvocadas *******/

let miMultiplicacion = (function multiplicar(a,b){
    return a * b;
})(5,2); //--> 10

console.log(miMultiplicacion);

/******* Funcion constructora *******/
let Pais = function(nombre,moneda){
    this.nombre = nombre;
    this.moneda = moneda;
};

let peru = new Pais('Peru','Sol');
console.log(peru);

/******* apply() y call()*******/
function add(a,b,c){
    return a + b + c;
};
let numeros = [2,3,4];

let myAdd = add.apply(undefined,numeros);
console.log(myAdd); //-> 9
let myOtherAdd = add.call(undefined,2,3,4);
console.log(myOtherAdd); //-> 9

/****** Funciones por definicion y expresion *******/
/* Tipos de funciones */

function funcionPorDefinicion() {
    //cuerpo de la funcion
}
funcionPorDefinicion();
let funcionPorExpresion = function () {
    // cuerpo de la funcion
};
funcionPorExpresion();

let c = console.log;
c('hola mundo');

/******* Funciones nombradas y funciones anonimas *******/
/* callback = una funcion que es ejecutada por
    otra luego de un proceso
*
*/
// el.addEventListener('click',function() {
//     //hacer algo
// });

/******* Arrow functions *******/
/* Funciones de flecha (arrow functions) ES6
*  Son funciones anonimas
*  (param1,param2,param3) => // valorDeRetorno
* */

// let suma = function (a,b) {
//     return a + b;
// }
let suma = (a,b) => a + b;
let miSuma2 = suma(1,2);
console.log(miSuma2) //--> 3

// let cuadrado = (a) => {
//     if(typeof a == 'number'){
//         return a * a;
//     }
// };
let cuadrado = (a) => (typeof a=='number' ? a * a:undefined);

let miCuadrado = cuadrado(6);
console.log(miCuadrado); //---> 25

let myObj = (a,b) => ({a,b});
let myCustomObj = myObj('hola','mundo');
console.log(myCustomObj);

/******* Parametros y argumentos *******/

let sumar2 = (a,b) => {
    console.log(arguments)
}
function sumar(a,b) {
    console.log(arguments);
}
sumar(2,3,5,6);

/*
* Si hay mas parametros que argumentos, los argumentos
* faltantes son undefined
*
* Si hay mas argumentos que parametros, no devuelve
* error
* */

function sumarTodos() {
 console.log(...arguments);
 return[...arguments].reduce((a,b)=>a + b);
}
console.log(sumarTodos(1,2,3,4));


function sumar3(a,b) {
    return a + b;
}

let numeros1 = [2,3];
console.log(sumar3(...numeros1));

/******* Parametros por defecto*******/
function sumar4(a,b = 2) {
    return a + b;
}
console.log(sumar(1)) //--> 3

/******* Parametros res*******/
function sumarTodos(...elements) {
    return elements.reduce((a,b) =>a + b);
}
console.log(sumarTodos(1,2));//--> 3

/*Scope es el ambito o contexto donde
* se ejecuta una funcion y existen sus varios variables
* */

/******* Closures *******/
function saludar() {
    let saludo = 'Hola';
    return function saludarInterno(amigo) {
        console.log(saludo + ''+ amigo);
    }
}
saludar()('Alexys'); //--> Hola Alexys
let miSaludo = saludar();
miSaludo('Alexys');  //--> Hola Alexys

function afuera() {
    let numero = 1;
    return function () {
        numero++;
        console.log(numero)
    }
}
afuera()(); //--> 2

/******* This *******/

let myObj1 = {
    nombre: 'Alvaro',
    saludar(){
        console.log(`Hola ${this.nombre}`)
    }
}
myObj1.saludar(); //--> Hola Alvaro

'use strict';
function checkThis() {
    console.log(this);
}
checkThis();

//Lexical this

function Boy(edad) {
    this.edad = 0;
    let _t = this;
    // setInterval(function () {
    //     _t.edad++;
    // },1000)

    setInterval(()=>{this.edad++},1000);
}
let juanito = new Boy()