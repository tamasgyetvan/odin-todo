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
export { validateProjectForm, emptyInputPlaceholder };
