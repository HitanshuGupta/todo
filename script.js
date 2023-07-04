const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// let tasks = [];



function addTask() {
	const taskText = taskInput.value;
     

	if (taskText !== "") {
		const task = {
			id: Date.now(),
			text: taskText
		}
axios.post("http://localhost:3000/addTask", task).then((response) => {
    console.log(response);
    taskInput.value = "";
    renderTaskList();
}).catch((err) => {
    console.log(err);
});
	}
}

function updateTask(id) {
    let updatedTask = prompt("Enter updated task");
    const data = {
        updatedTask,
    }
    if (updatedTask != null && updatedTask != "") {
    axios.patch(`http://localhost:3000/updateTask/${id}`, data).then((response) => {
        console.log(response);
        renderTaskList();
    }).catch((err) => {
        console.log(err);
    })
}
}

function renderTaskList() {
    taskList.innerHTML = "";
    axios.get("http://localhost:3000/getTask").then((result) => {
			result.data.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${task.text}</span>
                <button id = "button-56" onclick = "updateTask(${task.id})">Update</button>
                <button id = "button-56" onclick = "deleteTask(${task.id})">Delete</button>`;
                taskList.appendChild(li);
            });
        }).catch((err) => {
            console.log(err);
        })
    }
// function renderTaskList() {
// 	taskList.innerHTML = "";

// 	tasks.forEach((task) => {
// 		const listItem = document.createElement("li");
// 		listItem.innerHTML = `
//         <span>${task.text}</span>
//         <button id="delete-button" onclick="deleteTask(${task.id})">Delete</button>
//         `;
// 		taskList.appendChild(listItem);
// 	});
// }

function deleteTask(id) {
	axios.delete(`http://localhost:3000/deleteTask/${id}`)
		.then(() => {
			renderTaskList();
		})
		.catch((err) => {
			console.log(err);
		});

	//renderTaskList();
}
