// /******* Timers ******/
// /*
// * setTimeout(cb,t)
// * setIntervals(cb,t)
// *
// * */
//
// let counter = num => console.log(++num);
//
// setTimeout(function () {
//     counter(1)
// },3000)
//
// let count = 0;
// let myInterval = setInterval(function () {
//     console.log(++count);
//     if(count === 5){
//         clearInterval(myInterval);
//     }
// },5000);
//
//
// /******* Ejercicio: reloj  y countdown ******/
// /*
// * Ejercicio reloj
// * */
// let reloj = setInterval(function () {
//     document.body.innerHTML = new Date();
// },1000);
//
// let msToDateObj = ms => {
//     let seconds = Math.floor(ms / 1000),
//         minutes = Math.floor(ms / (1000 * 60)),
//         hours = Math.floor(ms / (1000 * 60 * 60)),
//         days = Math.floor(ms / (1000 * 60 * 60 * 24)),
//         years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
//     return {years,days,hours,minutes,seconds}
// };
//
// let msToExpandDateObj = ms => {
//     let years = msToDateObj(ms).years,
//         days = msToDateObj(ms).days % 30,
//         hours = msToDateObj(ms).days % 24,
//         minutes = msToDateObj(ms).days % 60,
//         seconds = msToDateObj(ms).days % 60;
//     return {years,days,hours,minutes,seconds}
// };
//
// let countDown = ms => {
//     let myCountDown = setInterval(function () {
//         let minutes = Math.floor(ms/(1000 * 60)),
//             seconds = Math.floor ((ms % (1000 * 60)) / 1000);
//         document.body.innerHTML = `Quedan ${minutes} minutos
//         y ${seconds} segundos`
//         ms -= 1000;
//         if(ms===0){
//             clearInterval(myCountDown);
//             document.body.innerHTML = `Tiempo cumplido`;
//         }
//     },1000)
// };
// countDown(80000);

/******* Ejercicio maquina de escribir ******/

let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
        if(arrFromStr[i] === ' '){
            document.body.innerHTML += arrFromStr[i];
            document.body.innerHTML += arrFromStr[i + 1];
            i+=2;
        }else{
            document.body.innerHTML += arrFromStr[i];
            i++;
        }
        if(i===arrFromStr.length){
            clearInterval(printStr);
            document.body.style.color = 'steelblue';
        }
    },400);
};
writing('Bienvenidos a Escuela Digital');
