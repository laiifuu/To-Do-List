import './style.css';
import Tasks from './functionalities.js';

let tasksList = new Tasks(); 

const newTaskInput = document.querySelector('.enter-task'); 
const tasksUL = document.querySelector('.tasks-list');

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks')) {
    tasksList.tasksList = JSON.parse(localStorage.getItem('tasks'));
    if (tasksList.tasksList.length !== 0) {
      tasksList.tasksList.forEach((item) => {
        const oldTask = tasksList.createTaskElement(item);
        tasksUL.append(oldTask);
      });
    }
  }
});

newTaskInput.addEventListener('keypress', (e) => {
  
  if (!e) e = window.event;
    let keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      e.preventDefault();
      tasksList.addTask(newTaskInput.value);
      newTaskInput.value = ""; 
      const newTask = tasksList.createTaskElement(tasksList.tasksList[tasksList.tasksList.length - 1]); 
      tasksUL.append(newTask);
      console.log(tasksList);
    }
});