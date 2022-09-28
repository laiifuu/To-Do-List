export default class Tasks {
  constructor() {
    this.tasksList = [];
  }

  removeTask(index) {
    this.tasksList.splice(index, 1);
    for (let i = index; i < this.tasksList.length; i += 1) {
      this.tasksList[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    this.updateDisplay();
  }

  createTaskElement(taskObj) {
    const item = document.createElement('li');
    item.classList.add('list-item');
    item.setAttribute('data-index', taskObj.index);
    item.innerHTML = `<button><i class="fa-regular fa-square"></i></button>
        <input type="text" value="${taskObj.description}" class="task-input">
        <i class="fa-solid fa-ellipsis-vertical trash-can"></i>`;

    const taskInput = item.querySelector('.task-input');
    const icon = item.querySelector('.trash-can');

    taskInput.addEventListener('focus', () => {
      item.style.backgroundColor = 'rgb(205, 187, 205)';
      icon.classList.remove('fa-solid');
      icon.classList.remove('fa-ellipsis-vertical');
      icon.classList.add('fa-regular');
      icon.classList.add('fa-trash-can');
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', () => {
        const index = parseInt(icon.parentElement.getAttribute('data-index'), 10);
        this.removeTask(index);
        icon.parentElement.remove();
      });
    });

    taskInput.addEventListener('focusout', () => {
      item.style.backgroundColor = 'white';
      icon.classList.add('fa-solid');
      icon.classList.add('fa-ellipsis-vertical');
      icon.classList.remove('fa-regular');
      icon.classList.remove('fa-trash-can');
      icon.style.cursor = 'move';
    });

    taskInput.addEventListener('keypress', (e) => {
      if (!e) e = window.event;
      const keyCode = e.code || e.key;
      if (keyCode === 'Enter') {
        e.preventDefault();
        const index = taskInput.parentElement.getAttribute('data-index');
        this.tasksList[index].description = taskInput.value;
        localStorage.setItem('tasks', JSON.stringify(this.tasksList));
      }
    });

    taskInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.target.blur();
      }
    });

    return item;
  }

  addTask(description) {
    const taskObj = {
      description,
      completed: false,
      index: this.tasksList.length,
    };
    this.tasksList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  editTask(newDesc, index) {
    this.tasksList[index].description = newDesc;
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  updateDisplay() {
    const tasks = document.querySelector('ul');
    tasks.innerHTML = '';
    for (let i = 0; i < this.tasksList.length; i += 1) {
      tasks.append(this.createTaskElement(this.tasksList[i]));
    }
  }
}
