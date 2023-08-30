// library
// own components

import { tasks } from "./model/tasks";
import { Task } from "./components/Task";

// functions
import { tasksToHTML } from "./utils/toHTML";

// styles
import "./style.css";

const taskManager = document.getElementById("task-manager");
const done = document.getElementById("done");

const title = document.querySelector("#task-title");
const description = document.querySelector("#task-description");

const send = document.querySelector("#btn");

send.addEventListener("click", (e) => {
  e.preventDefault();

  const task = new Task({
    title: title.value,
    description: description.value,
  });

  tasks.push(task);

  tasksToHTML(tasks, taskManager);
});

tasksToHTML(tasks, taskManager);
