import './style.css';
import Tasks from './functionalities.js';
import { clearCompletedTasks } from './status.js';

const tasksList = new Tasks();

const newTaskInput = document.querySelector('.enter-task');
const tasksUL = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('.clear-btn>button');

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks')) {
    tasksList.tasksList = JSON.parse(localStorage.getItem('tasks'));
    if (tasksList.tasksList.length !== 0) {
      tasksList.updateDisplay();
    }
  }
});

newTaskInput.addEventListener('keypress', (e) => {
  if (!e) e = window.event;
  const keyCode = e.code || e.key;
  if (keyCode === 'Enter') {
    e.preventDefault();
    tasksList.addTask(newTaskInput.value);
    newTaskInput.value = '';
    const newTask = tasksList
      .createTaskElement(tasksList.tasksList[tasksList.tasksList.length - 1]);
    tasksUL.append(newTask);
  }
});

clearBtn.addEventListener('click', () => {
  clearCompletedTasks(tasksList);
});