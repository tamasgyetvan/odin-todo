import { projectList } from "../index";
const projectContainer = document.getElementById("projectsContainer");
function renderProjects() {
  projectList.forEach((project) => {
    let createdProject = createProjectButton(project.name);
    projectContainer.appendChild(createdProject);
  });
}

function createProjectButton(projectName) {
  let btn = document.createElement("button");
  btn.classList.add("project");

  let projectPicture = document.createElement("img");
  let projectHeader = document.createElement("h4");
  projectPicture.setAttribute("src", "../src/to-do-list-svgrepo-com.svg");
  projectPicture.classList.add("projectImage");
  projectHeader.textContent = projectName;

  btn.appendChild(projectPicture);
  btn.appendChild(projectHeader);

  return btn;
}

function clearProjectsContainer() {
  projectContainer.innerHTML = "";
}
export { renderProjects, clearProjectsContainer };
