import { projectList } from "../index";
import { validateProjectForm } from "./formValidation";
import Project from "./Project";
import { setProjectStatusActive, getActiveProjectObject } from "./Project";
import { clearTaskContainer, renderTasks } from "./renderTask";
import { createAddTaskBtn, removeaddTaskBtn } from "./renderTaskForm";

const projectContainer = document.getElementById("projectsContainer");
const content = document.getElementById("content");
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
      clearTaskContainer();
      renderTasks();
      removeaddTaskBtn();
      createAddTaskBtn();
      removeActiveProjectHeader();
      renderActiveProjectHeader();
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
      removeActiveProjectHeader();
      renderProjects();
      addEventListenerToProjectBtns();
      addEventListenerToDelBtns();
      clearTaskContainer();
      removeaddTaskBtn();

      if (projectList.length === 0) {
        removeaddTaskBtn();
      } else {
        let activeProject = getActiveProjectObject();
        if (activeProject != undefined) {
          renderTasks();
          createAddTaskBtn();
        }
      }
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

function renderActiveProjectHeader() {
  let header = document.createElement("h1");
  header.setAttribute("id", "projectHeader");
  let activeProject = getActiveProjectObject();
  header.innerHTML = activeProject["name"];
  content.prepend(header);
}

function removeActiveProjectHeader() {
  const header = document.getElementById("projectHeader");
  if (header != null) {
    header.innerHTML = "";
  }
}
export {
  renderProjects,
  clearProjectsContainer,
  addNewProject,
  addEventListenerToProjectBtns,
};
