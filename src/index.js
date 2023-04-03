import "./style.css";
import Project from "./modules/Project";
import { validateProjectForm } from "./modules/formValidation";
import { renderProjects, clearProjectsContainer } from "./modules/render";
let projectList = [];

const createProjectBtn = document.getElementById("addProjectsButton");

createProjectBtn.addEventListener("click", function () {
  let projectFormValue = validateProjectForm();
  if (projectFormValue != false) {
    let newProject = new Project(projectFormValue);
    projectList.push(newProject);
    console.log(projectList);
    clearProjectsContainer();
    renderProjects();
  }
});

export { projectList };
