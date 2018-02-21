/******* Objeto Math *******/
/*
* Solo tiene propiedades y metodos estaticos
* Metodos
*
*  Math.max(a,b,c....)
*  Math.min(a,b,c....)
*  Math.random() -> numero alaeatorio entre 0 y 1
*  Math.floor() -> redondea hacia abajo un decimal
*  Math.ceil() -> redondea hacia arriba un decimal
*  Math.round() -> redondea un decimal
*  Math.pow(x,n) -> eleva x al exponente n
*  Math.sqrt(n) -> devuelve la raiz de n
* */

let arr = [1,2,3,8,4,5];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

/******* Numero Aleatorio *******/

let getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandomNumber(10,12));

let arr2 = ['jose', 'carlos', 'rebeca', 'pepe'];
console.log(arr2[getRandomNumber(0,arr2.length)]);


let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);



/******* Ejercicio: Adivina el numero *******/
let guestNumber = (min,max) => {
    let numMachine = getRandomNumber(min,max);
    let numPlayer;
    let count = 0;
    do{
        numPlayer = parseInt(prompt(`Adivina el numero de la maquina(entre ${min} y ${max}`),10);
        count++;
        if(numPlayer > numMachine){
            alert(`Tu numero es mayor que el de la maquina 
            vas ${count} intentos`)
        }else if(numPlayer < numMachine){
            alert(`Tu numero es menor que el de la maquina
            vas ${count} intentos`);
        }else{
            alert(`Advinaste el numero en ${count} ${count===1 ? 'intento' : 'intentos'} intentos!`)
        }
    }while(numPlayer !== numMachine);
};
guestNumber(30,50);