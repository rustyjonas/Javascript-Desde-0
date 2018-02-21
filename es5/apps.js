'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.isComplete = !this.isComplete;
        }
    }]);

    return Task;
}();

var TaskList = function () {
    function TaskList(name) {
        _classCallCheck(this, TaskList);

        this.name = name;
        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTask',
        value: function addTask(task, element) {
            this.tasks.push(task);
            this.renderTask(element);
        }
    }, {
        key: 'removeTask',
        value: function removeTask(i, element) {
            this.tasks.splice(i, 1);
            this.renderTask(element);
        }
    }, {
        key: 'renderTask',
        value: function renderTask(element) {
            var tasks = this.tasks.map(function (task) {
                return '\n            <li class="task">\n                <input type="checkbox" class="task__complete-button">\n                <span class="task__name">' + task.name + '</span>\n                <a href="#" class="task__remove-button">X</a>\n            </li>\n        ';
            });
            element.innerHTML = tasks.reduce(function (a, b) {
                return a + b;
            }, '');
        }
    }]);

    return TaskList;
}();

// Trabajar con el DOM


var addTaskElement = document.getElementById('add-task');
var tasksContainerElement = document.getElementById('tasks-container');
var inbox = new TaskList('inbox');

//Añadir tarea desde el DOM
function addDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // obtener el texto del input
    if (e.key === 'Enter') {
        // crear la tarea instanciando la clase
        var task = new Task(this.value);
        // añadir la tarea a la lista
        list.addTask(task, tasksContainerElement);
        // borrar el texto del input
        this.value = '';
    }
}
addTaskElement.addEventListener('keyup', addDOMTask);

function getTaskIndex(e) {
    var taskItem = e.target.parentElement,
        // li
    tasksItems = [].concat(_toConsumableArray(tasksContainerElement.querySelectorAll('li')));
    return tasksItems.indexOf(taskItem);
}
// Eliminar tarea desde el DOM
function completeDOMtask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // detectar que se hizo click en el input
    if (e.target.tagName === 'INPUT') {
        // completar la tarea de la lista (se necesita el indice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}
tasksContainerElement.addEventListener('click', completeDOMtask);

// Completar la tarea