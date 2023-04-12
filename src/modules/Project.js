import { projectList } from "../index";
export default class Project {
  constructor(name) {
    this.id = (Math.random() * 100).toFixed(5);
    this.name = name;
    this.todoList = [];
    this.active = false;
  }
}

function setProjectStatusActive() {
  const activeProjectObjectID = document
    .querySelector(".active")
    .getAttribute("data-id");

  /*let activeObject = projectList.find((x) => (x.id = activeProjectObjectID)); 

  activeObject.active = true;*/

  projectList.forEach((project) => {
    if (project.id === activeProjectObjectID) {
      project.active = true;
    } else {
      project.active = false;
    }
  });
}

export { setProjectStatusActive };
