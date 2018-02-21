/*
* Date requiere ser instanciado para usarse
* */

let date = new Date();
date.setMinutes(58);
date.setHours(20);
date.setDate(21);
date.setMonth(11)


/*
* Metodos get
*
* .getFullYear()
* .getMonth()
* .getHours()
* .getSeconds()
* .getMiliseconds()
* .getDate() -> Fecha del mes
* .getDay() -> Dia de la semana (0 -> domingo)
* .getTime() -> milisegundos
*
*
* */

let date2 = new Date();
console.log(date2.getDay());

/******* 6.3 & 6.4 - Ejercicio 1 : Imprimir la fecha y hora en nuestro formato personalizado*******/

let date3 = new Date();

let getStringDay = date => {
  let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  return days[date.getDay()];
};

let getStringMonth = date => {
    let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
    return months[date.getMonth()];
};
let hourLeadingZero = num => ('0' + num).slice(-2);

let getAmPmHours = date => {
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        amPm = hours >= 12 ? 'pm' : 'am';
    if( amPm === 'pm') hours -=12;
    return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)}${amPm}`
};

let dateFormated = `${getStringDay(date3)} ${date3.getDate()} de ${getStringMonth(date3)}
de ${date3.getFullYear()}, ${getAmPmHours(date3)}`;

console.log(dateFormated);

/******* Definir fechas *******/
/*
*
* new Date(año,mes,dia,horas,minutos,segundos,milisegundos)
* new Date(string)
* */
console.log(new Date(1980,1,4,5,45,32));
console.log(new Date('2/4/1980'));
console.log(new Date('Feb 04 1980 17:56:50 GMT-0500'));

/******* Operaciones con fechas *******/
/* Se operan con milisegundos (ms)
 * 1s = 1000ms
 * 1m = 1000ms * 60
 * 1h = 1000ms * 60 * 60
 * 1d = 1000ms * 60 * 60 * 24
 * 1y = 1000ms * 60 * 60 * 24 * 365
 */

let msToDateObj = ms => {
  let seconds = Math.floor(ms / 1000),
      minutes = Math.floor(ms / (1000 * 60)),
      hours = Math.floor(ms / (1000 * 60 * 60)),
      days = Math.floor(ms / (1000 * 60 * 60 * 24)),
      years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  return {years,days,hours,minutes,seconds}
};

let msToExpandDateObj = ms => {
    let years = msToDateObj(ms).years,
        days = msToDateObj(ms).days % 30,
        hours = msToDateObj(ms).days % 24,
        minutes = msToDateObj(ms).days % 60,
        seconds = msToDateObj(ms).days % 60;
    return {years,days,hours,minutes,seconds}
};

let date4 =new Date(),
    date5 = new Date('Feb 09 2010 05:45:50 GMT-0500');
console.log(msToExpandDateObj(date4 - date5));


/******* Fechas internacionales *******/
/*
* .getUTC
* .getTimeZoneOffset()
* */

let date6 = new Date();
console.log(date6.getHours());
console.log(date6.getUTCHours());
console.log(date6.getTimezoneOffset());
