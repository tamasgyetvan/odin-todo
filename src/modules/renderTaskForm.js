import { createNewTask } from "./Task";
import { clearTaskContainer, renderTasks } from "./renderTask";

const content = document.getElementById("content");

function createTaskForm() {
  const formDiv = document.createElement("div");
  formDiv.setAttribute("id", "taskForm");

  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("id", "taskNameInput");

  const addBtn = document.createElement("btn");
  addBtn.setAttribute("id", "addTaskBtn");
  addBtn.innerHTML = "Add";

  const cancelBtn = document.createElement("btn");
  cancelBtn.setAttribute("id", "cancelBtn");
  cancelBtn.innerHTML = "Cancel";

  cancelBtn.addEventListener("click", function () {
    removeTaskForm();
    createAddTaskBtn();
  });

  addBtn.addEventListener("click", function () {
    console.log("working");
    createNewTask();
    clearTaskContainer();
    renderTasks();
    removeTaskForm();
    createAddTaskBtn();
  });

  formDiv.appendChild(input);
  formDiv.appendChild(addBtn);
  formDiv.appendChild(cancelBtn);

  content.appendChild(formDiv);
}

function removeTaskForm() {
  const taskForm = document.getElementById("taskForm");
  taskForm.remove();
}

function createAddTaskBtn() {
  const addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskButton");

  const header = document.createElement("h4");
  header.innerHTML = "Add Task";

  const picture = document.createElement("img");
  picture.setAttribute("src", "../src/plus-circle-1441-svgrepo-com.svg");
  picture.classList.add("addTaskImage");

  addTaskBtn.appendChild(picture);
  addTaskBtn.appendChild(header);

  content.appendChild(addTaskBtn);

  addTaskBtn.addEventListener("click", function () {
    console.log("asd");
    removeaddTaskBtn();
    createTaskForm();
  });
}

function removeaddTaskBtn() {
  const addTaskBtn = document.getElementById("addTaskButton");

  if (addTaskBtn != null) {
    addTaskBtn.remove();
  }
}

export { createTaskForm, removeaddTaskBtn, createAddTaskBtn };
