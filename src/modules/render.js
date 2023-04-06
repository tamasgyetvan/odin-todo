import { projectList } from "../index";
import { validateProjectForm } from "./formValidation";
import Project from "./Project";

const projectContainer = document.getElementById("projectsContainer");

function renderProjects() {
  projectList.forEach((project) => {
    let createdProject = createProjectButtonElement(project.name, project.id);
    projectContainer.appendChild(createdProject);
  });
}

function createProjectButtonElement(projectName, projectID) {
  let btn = document.createElement("button");
  btn.classList.add("project");
  btn.setAttribute("data-ID", projectID);

  let projectPicture = document.createElement("img");
  let projectHeader = document.createElement("h4");
  projectPicture.setAttribute("src", "../src/to-do-list-svgrepo-com.svg");
  projectPicture.classList.add("projectImage");
  projectHeader.textContent = projectName;

  btn.appendChild(projectPicture);
  btn.appendChild(projectHeader);

  let delBtn = document.createElement("button");
  delBtn.classList.add("deleteProjectButton");
  delBtn.innerHTML = "X";

  btn.appendChild(delBtn);
  return btn;
}

function addNewProject() {
  let projectFormValue = validateProjectForm();
  if (projectFormValue != false) {
    let newProject = new Project(projectFormValue);
    projectList.push(newProject);
    console.log(projectList);
    clearProjectsContainer();
    renderProjects();
    addEventListenerToDelBtns();
  }
}

function addEventListenerToDelBtns() {
  const deleteProjectButtons = document.querySelectorAll(
    ".deleteProjectButton"
  );
  deleteProjectButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const targetID = e.target.parentNode.dataset.id;
      deleteProjectFromList(projectList, targetID);
      clearProjectsContainer();
      renderProjects();
      addEventListenerToDelBtns();
      console.log(projectList);
    });
  });
}

function deleteProjectFromList(arr, id) {
  const objToRemove = arr.findIndex((obj) => obj.id === id);
  arr.splice(objToRemove, 1);
}

function clearProjectsContainer() {
  projectContainer.innerHTML = "";
}
export { renderProjects, clearProjectsContainer, addNewProject };
