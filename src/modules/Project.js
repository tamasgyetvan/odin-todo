import { projectList } from "../index";
export default class Project {
  constructor(name) {
    this.id = (Math.random() * 100).toFixed(5);
    this.name = name;
    this.todoList = [];
    this.active = false;
  }
}

function getActiveProjectObject() {
  let activeProject = document.getElementsByClassName("active");
  console.log(activeProject);
  if (activeProject.length > 0) {
    let activeProjectID = activeProject[0].getAttribute("data-id");
    return projectList.find((x) => x.id === activeProjectID);
  }
}

function setProjectStatusActive() {
  const activeProjectObjectID = document
    .querySelector(".active")
    .getAttribute("data-id");

  projectList.forEach((project) => {
    if (project.id === activeProjectObjectID) {
      project.active = true;
    } else {
      project.active = false;
    }
  });
}

export { setProjectStatusActive, getActiveProjectObject };
