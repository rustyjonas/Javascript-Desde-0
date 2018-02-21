/******* Eventos *******/
/*
* Un evento es 'cualquier cosa' que sucede en la aplicacion
*
*   ¿Como reconocer los eventos disponibles en un objeto?
*       console.dir(obj)
*           todos los que comiencen con on son eventos
*
*   Como aplico una funcion a un evento
*       objeto.onEvent = function(){}
*           onEvent = evento del objeto
*
*   Se recomiendo usar addEventListener
*       objeto.addEventListener('event',function(){})
*           event -> el nombre del evento (sin 'on')
*
* */

/*
* Eventos comunes
*   De mouse
*       'click' -> cuando el usuario hace click
*       'dblclick' -> doble click
*       'mousedown'
*       'mouseenter'
*       'mouseLeave'
*       'mousemove'
*       'mouseout'
*       'mouseover'
*       'mouseup'
*       'mousewheel'
*
*   De teclado
*       'keydown'
*       'keyup'
*
*   De formulario
*       'submit' -> cuando se envia el formulario
*       'change' -> cambio de valor de un input
*
*   De window
*       'resize' -> cuando se redimensiona la ventana
*       'scroll' -> cuando se hace scroll
*       'load'   -> cuando se carga completamente toda la pagina web
*       'DOMContentLoaded' -> cuando se renderiza el DOM
*
*/

let item1 = document.getElementById('item1');

item1.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.color = 'blue';
})


/******* Delegacion de eventos *******/

let eventHandler = e => {
    console.log(e);
    if(e.target.tagName === 'A'){
        console.log(e.target.textContent);
    }
}

item1.addEventListener('click', eventHandler);