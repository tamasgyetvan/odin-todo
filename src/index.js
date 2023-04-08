import "./style.css";
import { addNewProject } from "./modules/render";
import { emptyInputPlaceholder } from "./modules/formValidation";
let projectList = [];

const createProjectBtn = document.getElementById("addProjectsButton");

createProjectBtn.addEventListener("click", function () {
  addNewProject();
  emptyInputPlaceholder();
});

export { projectList };
