export default class Project {
  constructor(name) {
    this.id = Math.random() * 100;
    this.name = name;
    this.todoList = [];
  }
}
