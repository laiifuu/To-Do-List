import Tasks from './functionalities.js';

describe('Testing addTask method', () => {
  test('The list of tasks should have 4 items', () => {
    const tasks = new Tasks();
    tasks.addTask('Task 0');
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    tasks.addTask('Task 3');
    expect(tasks.tasksList.length).toBe(4);
  });
  test('Local storage should not be empty', () => {
    const tasks = new Tasks();
    tasks.addTask('Task 0');
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    expect(localStorage.getItem('tasks')).toBeTruthy();
  });
});

describe('Testing removeTask method', () => {
  test('Expect tasksList to have 1 item', () => {
    document.body.innerHTML = `<div class="tasks-section">
            <ul role="list" class="tasks-list">
            </ul>
        </div>
        <div class="clear-btn">
            <button disabled>Clear All Completed</button>
        </div>`;
    const tasks = new Tasks();
    tasks.addTask('Task 0');
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    tasks.removeTask(0);
    tasks.removeTask(1);
    expect(tasks.tasksList[0].description).toBe('Task 1');
  });
});

describe('Testing editTask method', () => {
  test('Expect task 1 to change to I am the updated task', () => {
    const tasks = new Tasks();
    tasks.addTask('Task 0');
    tasks.addTask('Task 1');
    tasks.addTask('Task 2');
    tasks.addTask('Task 3');
    tasks.editTask('I am the updated task', 1);
    expect(tasks.tasksList[1].description).toBe('I am the updated task');
  });
});
