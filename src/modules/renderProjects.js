import { projectList } from "../index";
import { validateProjectForm } from "./formValidation";
import Project from "./Project";
import { setProjectStatusActive } from "./Project";

const projectContainer = document.getElementById("projectsContainer");

function renderProjects() {
  projectList.forEach((project) => {
    let createdProject = createProjectButtonElement(
      project.name,
      project.id,
      project.active
    );
    projectContainer.appendChild(createdProject);
  });
}

function createProjectButtonElement(projectName, projectID, activeStatus) {
  let btn = document.createElement("button");
  btn.classList.add("project2");
  btn.setAttribute("data-ID", projectID);
  if (activeStatus == true) {
    btn.classList.add("active");
  }

  let projectPicture = document.createElement("img");
  let projectHeader = document.createElement("h4");
  projectPicture.setAttribute("src", "../src/to-do-list-svgrepo-com.svg");
  projectPicture.classList.add("projectImage", "project");
  projectHeader.textContent = projectName;
  projectHeader.classList.add("project");

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
    clearProjectsContainer();
    renderProjects();
    addEventListenerToDelBtns();
    addEventListenerToProjectBtns();
  }
}

function addEventListenerToProjectBtns() {
  const projectButtons = document.querySelectorAll(".project");

  projectButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      removeActiveClassToProjectBtn();
      addActiveClassToProjectBtn(e);
      setProjectStatusActive();
      console.log(projectList);
    });
  });
}

function addActiveClassToProjectBtn(e) {
  if (e.target.parentNode.id === "projectsContainer") {
    e.target.classList.add("active");
  } else {
    e.target.parentNode.classList.add("active");
  }
}

function removeActiveClassToProjectBtn() {
  const activeProject = document.querySelector(".active");

  if (activeProject != null) {
    activeProject.classList.remove("active");
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
export {
  renderProjects,
  clearProjectsContainer,
  addNewProject,
  addEventListenerToProjectBtns,
};
