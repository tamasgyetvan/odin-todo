let inputProjectName = document.getElementById("projectNameInput");

function validateProjectForm() {
  if (inputProjectName.value == "") {
    alert("Project name cannot be empty");
    return false;
  } else {
    return inputProjectName.value;
  }
}
function emptyInputPlaceholder() {
  inputProjectName.value = "";
}

function validateTaskForm() {
  let inputTaskName = document.getElementById("taskNameInput");
  if (inputTaskName.value == "") {
    alert("Task name cannot be empty");
    return false;
  } else {
    return inputTaskName.value;
  }
}
export { validateProjectForm, validateTaskForm, emptyInputPlaceholder };
