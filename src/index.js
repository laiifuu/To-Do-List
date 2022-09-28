import './style.css';

const tasksList = document.querySelector('.tasks-list');
const tasks = [];

function populateTasksSection(tasks) {
  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.classList.add('list-item');
    item.innerHTML = `<button><i class="fa-regular fa-square"></i></button>
        <span>${task.description}</span>
        <i class="fa-solid fa-ellipsis-vertical"></i>`;
    tasksList.append(item);
  });
}

populateTasksSection(tasks);