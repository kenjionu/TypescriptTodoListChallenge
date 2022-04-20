"use strict";
let lists = [
    {
        id: "my id",
        name: "My First List",
        tasks: []
    }
];
const app = () => {
    console.log('Ingrese por favor la del metodo segun la tarea que va a realizar, ejemplo:');
    console.log(" ");
    console.log("showLists() para ver las listas");
    console.log(" ");
    console.log("createList(nombreLista) el parametro es string para ver las listas");
    console.log(" ");
    console.log("addTaskToList(nombreDeLaTarea, idDeLaLista) ambos parametros son de tipo string, para ver las listas");
    console.log(" ");
    console.log("editList(nombreDeLaTarea, idDeLaLista) ambos parametros son de tipo string, para editar la lista");
    console.log(" ");
    console.log("deleteList(idDeLaLista) el parametro es de tipo string, para eliminar la lista");
};
// List operations
const showLists = () => {
    console.table(lists);
};
const createList = (name) => {
    console.log(lists);
    lists.push({
        id: `list-${Math.random()}`,
        name,
        tasks: []
    });
    console.log('Se ha ingresado una nueva lista con exito.');
};
const editList = (name, listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    lists[listIndex].name = name;
    console.log('Se ha editado la lista con exito.');
};
const deleteList = (listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    lists.splice(listIndex, 1);
    console.log('Se ha elimino la lista con exito.');
    showLists();
};
// Tasks operations
const showTaskTList = (listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    lists[listIndex].tasks.forEach(tarea => {
        console.log(`Tarea? ${tarea.name}`);
    });
};
const addTaskToList = (name, listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    lists[listIndex].tasks.push({
        id: `list-${Math.random()}`,
        name,
        status: false
    });
    console.log(lists[listIndex].tasks);
    console.log("Tarea anadida con exito.");
};
const editTask = (name, status, taskId, listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    const taskIndex = lists[listIndex].tasks.findIndex(task => task.id === taskId);
    lists[listIndex].tasks[taskIndex] = {
        id: lists[listIndex].tasks[taskIndex].id,
        name,
        status
    };
    console.log(lists[listIndex].tasks);
    console.log("Tarea anadida con exito.");
};
const deleteTask = (taskId, listId) => {
    const listIndex = lists.findIndex(list => list.id === listId);
    console.log(`listIndex ${listIndex}`);
    const taskIndex = lists[listIndex].tasks.findIndex(task => task.id === taskId);
    console.log(`${taskIndex}`);
    console.log(lists[listIndex].tasks);
    lists[listIndex].tasks.splice(taskIndex, 1);
    console.log(lists[listIndex].tasks);
    console.log("Tarea eliminada con exito.");
};
app();
//# sourceMappingURL=app.js.map