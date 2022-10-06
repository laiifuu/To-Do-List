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