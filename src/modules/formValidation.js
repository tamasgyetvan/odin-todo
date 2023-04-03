function validateProjectForm() {
  let inputProjectName = document.getElementById("projectNameInput").value;

  if (inputProjectName == "") {
    alert("Project name cannot be empty");
    return false;
  } else {
    return inputProjectName;
  }
}

export { validateProjectForm };
