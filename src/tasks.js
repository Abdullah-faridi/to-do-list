class Task {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.id = crypto.randomUUID();
    }
  }
  
  class TaskContainer {
    constructor() {
      this.tasks = [];
    }
  
    addTasks(task) {
      this.tasks.push(task);
      renderTasks();
    }
  
    removeTaskById(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      renderTasks();
    }
  }
  
  const myTasks = new TaskContainer();
  
  function addingTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, dueDate, priority);
    myTasks.addTasks(newTask);
  }
  
  function renderTasks() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
  
    myTasks.tasks.forEach(task => {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-card", task.priority);
      taskDiv.innerHTML = `
        <h3>${task.title}</h3>
        <p>About task:${task.description}</p>
        <p>Due date : ${task.dueDate}</p>
        <p>Priority:${task.priority}</p>
        <button class="delete">Delete</button>
      `;
  
      const deleteBtn = taskDiv.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        myTasks.removeTaskById(task.id);
      });
  
      container.appendChild(taskDiv);
    });
  }
  
  export default addingTask;
  