// Iteration 1
// 1. Create an array of strings
let tasks: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string){
  tasks.push(task);
  console.log("Insert task");
  return tasks.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  tasks.forEach(function(a){
    console.log(a);
  })
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string){
 let dtask = tasks.indexOf(task);
 return tasks.splice(dtask, 1).length;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
