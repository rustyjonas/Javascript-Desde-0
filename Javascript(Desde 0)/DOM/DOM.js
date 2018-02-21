/******* Introduccion al DOM *******/
/*
* DOM -> Document Object Model
*
* .body         -> body element
* .links        -> root (html)
* .scripts      -> enlaces
* .images       -> scripts
* .head         -> head element
* .styleSheets  -> todos los css
*
* */

/******* Obtener elementos del DOM *******/
/*
*   document.getElementById('id');
*   document.querySelector('cssSelector');
*   document.querySelectAll('cssSelector');
*
*   Si no se encuentra el (los) elemento se devuelve null
*
*
*   querySelector() y querySelectorAll()
*       Se pueden ejecutar desde el documento o desde un elemento
*       querySelectorAll no devuelve un array (nodelist), es necesario
*           [...document.querySelectorAll(selector)]
* */

let title = document.getElementById('title');
if(title){
    te
}
// el resto de tu app que no se ejecutara jamas por culpa de la linea anterior

let menu = document.getElementById('menu');
    menuLinks = menu.querySelectorAll('a')


/******* DOM transversing *******/
/*Hermanos
*   element.nextElementSibling -> hermano siguiente (elemento)
*   element.nextSibling -> hermano siguiente (nodo)
*   element.previousElementSibling -> hermano anterior (elemento)
*   element.previousSibling -> hermano anterior (nodo)
*
* Padre
*   element.parentElement -> padre
*   element.parentNode -> padre (nodo)
*
*Hijos
*   element.children -> Lista de elementos hijos
*   element.childNodes -> todos los nodos hijos
*   element.firstElementChild -> primer elemento hijo
*   element.firstChild -> primero nodo hijo
*   element.lastElementChild -> ultimo elemento hijo
*   element.lastChild -> ultimo nodo hijo
* */

/******* Propiedades de los elementos *******/
/*
*   Contenido
*       .textContent -> texto plano del elementos (lectura y escritura)
*       .innerHTML   -> HTML interno de un elemento
*
*   Atributos
*       .attributes
*       .getAttribute('attr')
*       .setAtrribute('attr','value')
*       .removeAttribute('attr')
*
*   Clases
*       .classList
*           .add('className')
*           .remove('className')
*           .toggle('className')
*           .contains('className') -> devuelve true si el elemento contiene esa clase
*
*
*    Estilos CSS
*       .style
*           .cssProperty (usar camelCase en lugar de guiones)
*
* */

/*
* Transformar el DOM
*
*   Crear elementos
*       document.createElement('tagName')
*
*   Insertar elementos
*       .appendChild()
*           parentElement.appendChild(element)
*
*   .insertBefore() -> inserta un elementos antes de otro
*       parent.insertBefore(newElement,nextElement)
*           parent -> Elemento padre
*           newElement -> Elemento a insertar
*           nextElement -> Elemento ya existente antes del cual se insertara el nuevo
*
*    Eliminar y moves elementos
*       parent.removeChild(element)
*           elimina element de parent
*       element.remove()
*           elimina element
*
* */

let item = menuItems[1];

let el = document.createElement('li');
el.textContent = 'Soy un nuevo elemento';
menu.appendChild(el);


