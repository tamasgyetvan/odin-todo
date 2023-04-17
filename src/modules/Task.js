import { validateTaskForm } from "./formValidation";
import { projectList } from "../index";
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
  let activeProject = document.getElementsByClassName("active");
  let activeProjectID = activeProject[0].getAttribute("data-id");

  let activeObject = projectList.find((x) => x.id === activeProjectID);
  activeObject["todoList"].push(task);
  console.log(activeObject["todoList"]);
}

export { createNewTask };
