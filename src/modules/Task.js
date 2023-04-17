class Task {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100).toFixed(5);
  }
}
