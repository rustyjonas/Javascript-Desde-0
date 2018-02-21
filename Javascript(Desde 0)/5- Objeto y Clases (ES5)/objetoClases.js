// Clase -> plantilla a partir de la cual se crean objetos
// instancia -> cada objeto creado a partir de una clase
// constructor -> funcion que se ejecuta automaticamente al instanciar una clase
// propiedad -> valores
// metodos -> funciones

var Profesor = function (nombre,apellido,pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
}

var jon = new Profesor('jon','mircha','mexico');
var alexys = new Profesor('alexys','lozada','colombia');


/******* Clases en ES6 *******/

// metodos -> funciones
// Clases en ES6

class Persona{
    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`
}
saludar(){
    return `Hola, soy ${nombreCompleto} y vivo en ${pais}`;
    }
}



/******* Herencia *******/
class Profesor extends Persona {
    constructor(nombre,apellido,pais,curso){
        super(nombre,apellido,pais);
        this.curso = curso;
    }
    invitarAlcurso(){
        return `Hola, soy ${this.nombrecompleto}, profesos en Escuela digital
         y te invito al cursos ${this.curso}. Nos vemos en clase!`
    }

    /******* Metodos Estaticos *******/
    static describirPersona(persona){
        return `Esta persona se llama ${persona.nombreCompleto} y es 
        de ${persona.pais}`;
    }
}
const alexys2 = new Persona('Alexys','Lozada','Colombia');
const juan = new persona('Juan','Paredes','España');
const daniel = new persona('Daniel','Romero','Colombia','PHP Desde Cero');
console.log(daniel.saludar());

class MiLibreria {
    constructor(){

}
static.funcionalidadA(){
        return `bla bla bla`;
    }
}
