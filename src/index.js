import "./style.css";
import { addNewProject, renderProjects } from "./modules/renderProjects";
import { emptyInputPlaceholder } from "./modules/formValidation";
let projectList = [];

const createProjectBtn = document.getElementById("addProjectsButton");
createProjectBtn.addEventListener("click", function () {
  addNewProject();
  emptyInputPlaceholder();
});

renderProjects();

export { projectList };
