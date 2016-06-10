var task = {};
task.title = 'my task';
task.description = 'my description'
console.log(task.title + "1");
console.log(task.description + "1");

//using object.create method
var task = Object.create(Object.prototype);
task.title = 'my task';
task.description = 'my description'

task.toString = function () {
  return this.title;
}
console.log(task.toString() + "2");

//using Object Initializers
var task = new Object();
task = {
  title: 'my task',
  description: 'my description'
}
task.toString = function () {
  return this.description;
}
console.log(task.toString() + "3");



