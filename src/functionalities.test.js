import Tasks from './functionalities';

describe("Testing addTask method", () => {
    test("The list of tasks should have 4 items", () => {
        const tasks = new Tasks();
        tasks.addTask("Task 0");
        tasks.addTask("Task 1");
        tasks.addTask("Task 2");
        tasks.addTask("Task 3");
        expect(tasks.tasksList.length).toBe(4);
    });
    test("Local storage should not be empty", () => {
        const tasks = new Tasks();
        tasks.addTask("Task 0");
        tasks.addTask("Task 1");
        tasks.addTask("Task 2");
    expect(localStorage.getItem("tasks")).toBeTruthy();
    });
});
