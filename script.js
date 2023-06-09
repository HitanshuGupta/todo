const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

function addTask() {
    const taskText  =  taskInput.value;

    if (taskText !== '') {

    const task = {
        id: Date.now(),
        text:taskText
    }

    tasks.push(task);
    taskInput.value = '';


    renderTaskList();
}
}

function renderTaskList() {
    taskList.innerHTML = "";

		tasks.forEach((task) => {
			const listItem = document.createElement("li");
			listItem.innerHTML = `
        <span>${task.text}</span>
        <button id="delete-button" onclick="deleteTask(${task.id})">Delete</button>
        `
			taskList.appendChild(listItem);
		});
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTaskList();

}