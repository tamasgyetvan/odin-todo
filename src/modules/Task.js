import { validateTaskForm } from "./formValidation";
import { getActiveProjectObject } from "./Project";
class Task {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100).toFixed(5);
  }
}

function addNewTask() {
  const taskFormValue = validateTaskForm();
  if (taskFormValue != false) {
    let newTask = new Task(taskFormValue);
    addTaskToActiveProject(newTask);
  }
}

function addTaskToActiveProject(task) {
  let activeObject = getActiveProjectObject();
  activeObject["todoList"].push(task);
  console.log(activeObject["todoList"]);
}
function deleteTaskFromProject(activeproject, taskID) {
  const taskToRemove = activeproject["todoList"].findIndex(
    (task) => task.id === taskID
  );
  activeproject["todoList"].splice(taskToRemove, 1);
}

export { addNewTask, deleteTaskFromProject };
