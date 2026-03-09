let tasks = [];
let completed = [];

function addTask(){

let task = document.getElementById("taskInput").value;

if(task == "") return;

tasks.push(task);

localStorage.setItem("tasks", tasks);

displayTasks();

document.getElementById("taskInput").value="";
}

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

let stored = localStorage.getItem("tasks");

if(stored != null){
tasks = stored.split(",");
}

for(let i=0;i<tasks.length;i++){

list.innerHTML +=
"<li>"+
"<input type='checkbox' onclick='completeTask("+i+")'> "+
tasks[i]+
" <button onclick='deleteTask("+i+")'>Delete</button>"+
"</li>";

}

document.getElementById("counter").innerHTML =
"Total Tasks: " + tasks.length;
}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks", tasks);

displayTasks();
}

function completeTask(index){

let items = document.getElementsByTagName("li");

items[index].classList.toggle("completed");

}

displayTasks();