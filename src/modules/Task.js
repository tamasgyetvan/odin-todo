import { validateTaskForm } from "./formValidation";
import { projectList } from "../index";
import { getActiveProjectObject } from "./Project";
class Task {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100).toFixed(5);
  }
}

function createNewTask() {
  const taskFormValue = validateTaskForm();
  if (taskFormValue != false) {
    let newTask = new Task(taskFormValue);
    addTaskToActiveProject(newTask);
  }
}

function addTaskToActiveProject(task) {
  let activeObject = getActiveProjectObject();
  activeObject["todoList"].push(task);
  console.log(activeObject["todoList"]);
}

export { createNewTask };
