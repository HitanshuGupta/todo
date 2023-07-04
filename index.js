const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
let tasks = [];

app.post("/addTask", (req, res) => {
	console.log("Inside Post /addTask API", req.body);
	const text = req.body.text;
	const task = {
		text,
		id: Date.now(),
	};
	tasks.push(task);
	console.log(tasks);
	res.status(200).json(task);
});

app.get("/getTask", (req, res) => {
	console.log("Inside Get /getTask API", tasks);
	res.json(tasks);
});

// pass id in params
//pass text in body
// whenever we pass in params and in query then it came here in string ...
// if it is a integer then we have convert if we checkinh its type by using ===
app.patch("/updateTask/:id", (req, res) => {
	console.log(
		"Inside Update /updateTask API",
		req.body.updatedTask,
		req.params.id
	);
	const id = req.params.id;
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].id == id) {
			tasks[i].text = req.body.updatedTask;
			break;
		}
	}
	res.status(200).json({ message: "task is successfully updated" });
});

app.delete("/deleteTask/:id", (req, res) => {
	const id = req.params.id;
    tasks = tasks.filter((task) => task.id != id);
	res.status(200).json({ message: "task is deleted" });
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running in port ${port}`);
});
