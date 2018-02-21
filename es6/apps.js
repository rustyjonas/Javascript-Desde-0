class Task {
    constructor(name){
        this.name = name;
        this.isComplete = false;
    }
    complete(){
        this.isComplete = !this.isComplete;
    }
}
class TaskList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(task,element){
        this.tasks.push(task);
        this.renderTask(element);
    }
    removeTask(i,element){
        this.tasks.splice(i,1);
        this.renderTask(element);
    }

    renderTask(element){
        let tasks = this.tasks.map(task => `
            <li class="task">
                <input type="checkbox" class="task__complete-button">
                <span class="task__name">${task.name}</span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);
        element.innerHTML = tasks.reduce((a,b)=> a + b, '');
    }
}

// Trabajar con el DOM
const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');

//Añadir tarea desde el DOM
function addDOMTask(e, list = inbox) {
    // obtener el texto del input
    if(e.key === 'Enter'){
        // crear la tarea instanciando la clase
        let task = new Task(this.value);
        // añadir la tarea a la lista
        list.addTask(task,tasksContainerElement);
        // borrar el texto del input
        this.value = '';
    }
}
addTaskElement.addEventListener('keyup',addDOMTask);

function getTaskIndex(e) {
    let taskItem = e.target.parentElement, // li
        tasksItems = [...tasksContainerElement.querySelectorAll('li')];
        return tasksItems.indexOf(taskItem);
}
// Eliminar tarea desde el DOM
function completeDOMtask(e, list = inbox) {
    // detectar que se hizo click en el input
    if(e.target.tagName === 'INPUT'){
        // completar la tarea de la lista (se necesita el indice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}
tasksContainerElement.addEventListener('click',completeDOMtask);

// Completar la tarea