export default class Project {
  constructor(name) {
    this.id = (Math.random() * 100).toFixed(5);
    this.name = name;
    this.todoList = [];
  }
}
