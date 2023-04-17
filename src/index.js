import "./style.css";
import { addNewProject, renderProjects } from "./modules/renderProjects";
import { emptyInputPlaceholder } from "./modules/formValidation";
import { createTaskForm, removeaddTaskBtn } from "./modules/renderTaskForm";
let projectList = [];

const createProjectBtn = document.getElementById("addProjectsButton");
createProjectBtn.addEventListener("click", function () {
  addNewProject();
  emptyInputPlaceholder();
});

export { projectList };
