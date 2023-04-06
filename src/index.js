import "./style.css";
import { addNewProject } from "./modules/render";
import { emptyInputPlaceholder } from "./modules/formValidation";
let projectList = [];

const createProjectBtn = document.getElementById("addProjectsButton");
const deleteProjectButtons = document.querySelectorAll(".deleteProjectButton");

createProjectBtn.addEventListener("click", function () {
  addNewProject();
  emptyInputPlaceholder();
});

deleteProjectButtons.forEach((deleteProjectbtn) => {
  deleteProjectbtn.addEventListener("click", function () {
    console.log("test");
  });
});

export { projectList };
