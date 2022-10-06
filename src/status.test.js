import {updateStatus, clearCompletedTasks} from './status.js';
import Tasks from './functionalities.js';

describe("Testing updateStatus method", () => {
    test("The first item should be completed", () => {
      const tasks = new Tasks();
      tasks.addTask("Task 0");
      tasks.addTask("Task 1");
      tasks.addTask("Task 2");
      tasks.addTask("Task 3");

      updateStatus(0, tasks.tasksList);
      expect(tasks.tasksList[0].completed).toBe(true);
    });
  });

describe('Testing Clear all completed button', () => {
  test('Expect tasksList to have 1 item', () => {
    document.body.innerHTML =
      `<div class="add-task-section">
        <form action="">
            <div><input class="enter-task" type="text" placeholder="Add to your list.." required></div>
        </form>
        </div>
        <div class="tasks-section">
            <ul role="list" class="tasks-list">
            </ul>
        </div>
        <div class="clear-btn">
            <button disabled>Clear All Completed</button>
        </div>`;
    console.log(document.body);
    const tasks = new Tasks();
    tasks.addTask("Task 0");
    tasks.addTask("Task 1");
    tasks.addTask("Task 2");

    updateStatus(0, tasks.tasksList);
    updateStatus(1, tasks.tasksList);

    tasks.updateDisplay();

    clearCompletedTasks(tasks);
    expect(tasks.tasksList.length).toBe(1);
  });
});
