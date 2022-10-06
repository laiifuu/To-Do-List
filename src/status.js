export function updateStatus(index, tasksList) {
  if (tasksList[index].completed === true) {
    tasksList[index].completed = false;
  } else {
    tasksList[index].completed = true;
  }

  localStorage.setItem('tasks', JSON.stringify(tasksList));
  tasksList = JSON.parse(localStorage.getItem('tasks'));
}

export function clearCompletedTasks(tasks){
  tasks.tasksList = tasks.tasksList.filter((item) => item.completed === false);
  for (let i = 0; i < tasks.tasksList.length; i += 1) {
    tasks.tasksList[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks.tasksList));
  tasks.updateDisplay();
}