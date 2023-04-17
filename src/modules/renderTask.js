import { getActiveProjectObject } from "./Project";

function renderTasks() {
  let activeProject = getActiveProjectObject();
  activeProject["todoList"].forEach((task) => {
    let createdTask = createTaskElement(task.name, task.id);
  });
}

const taskContainer = document.getElementById("taskContainer");

function createTaskElement(taskName, taskID) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "task");
  taskDiv.setAttribute("data-id", taskID);

  let checkbox = document.createElement("div");
  checkbox.setAttribute("class", "checkbox");

  let tasktitle = document.createElement("h4");
  tasktitle.innerHTML = taskName;

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(tasktitle);

  taskContainer.appendChild(taskDiv);
}

function clearTaskContainer() {
  taskContainer.innerHTML = "";
}
export { renderTasks, clearTaskContainer };
