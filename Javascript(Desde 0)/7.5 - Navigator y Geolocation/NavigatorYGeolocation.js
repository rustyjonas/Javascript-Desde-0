/******* Navigator y Geolocation *******/
/*
*
* Geolocation es un objeto con tres metodos
* .clearWatch()
* .watchPosition()
* .getCurrentPosition(success[,error,options])
*
* */

navigator.geolocation.getCurrentPosition(function (geoposition) {
    let coords = geoposition.coords,
        lat = coords.latitude;
        long = coords.longitude;

    console.log({lat,long}) ;
});

/******* Location *******/
/*
* Location -> contiene la informacion de la pagina actual
*
*   .href       -> url
*   .pathname   -> la ruta dentro del dominio
*   .hash       ->
*   .origin     -> protocol + hostname
*   .protocol   -> http o https
*   .hostname   -> hostname (dominio o IP)
*   .host       -> hostname y port
*   .port       -> puerto
*   .search     -> parametros de busqueda ?id=1
* */


/*
* Ejercicio: determinar item activo de un menu
*
* */

function getCurrentMenuItem(containerElement) {
    let url = location.href,
        links = [...containerElement.querySelectorAll('a')];
    links.map(link =>{
        if(link.href === url) return link.classList.add('active');
    })
}
getCurrentMenuItem(document.getElementById('menu'));