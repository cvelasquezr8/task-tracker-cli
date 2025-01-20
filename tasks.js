const fs = require("fs");
const yargs = require("yargs");

const tasksFile = "tasks.json";
const statusOptions = ["not done", "in progress", "done"];

// Helper to load tasks
const loadTasks = () => {
  if (fs.existsSync(tasksFile)) {
    return JSON.parse(fs.readFileSync(tasksFile));
  }
  return [];
};

// Helper to save tasks
const saveTasks = (tasks) => {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// Command: Add a task
yargs.command({
  command: "add",
  describe: "Add a new task",
  builder: {
    title: {
      describe: "Task title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    const tasks = loadTasks();
    tasks.push({ id: tasks.length + 1, title, status: "not done" });
    saveTasks(tasks);
    console.log(`Task added: "${title}"`);
  },
});

// Command: Update a task
yargs.command({
  command: "update",
  describe: "Update a task's title",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
    title: {
      describe: "New task title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ id, title }) => {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === id );
    if (task) {
      task.title = title;
      saveTasks(tasks);
      console.log(`Task updated: "${title}"`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  },
});

// Command: Delete a task
yargs.command({
  command: "delete",
  describe: "Delete a task",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({ id }) => {
    const tasks = loadTasks();
    const newTasks = tasks.filter((task) => task.id !== id);
    if (newTasks.length === tasks.length) {
      console.log(`Task with ID ${id} not found.`);
    } else {
      saveTasks(newTasks);
      console.log(`Task with ID ${id} deleted.`);
    }
  },
});

// Command: Change task status
yargs.command({
  command: "status",
  describe: "Change task status",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
    status: {
      describe: "New status (not done, in progress, done)",
      demandOption: true,
      choices: statusOptions,
      type: "string",
    },
  },
  handler: ({ id, status }) => {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.status = status;
      saveTasks(tasks);
      console.log(`Task with ID ${id} status updated to "${status}".`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  },
});

// Command: List tasks
yargs.command({
  command: "list",
  describe: "List tasks",
  builder: {
    filter: {
      describe: "Filter tasks by status (all, done, not done, in progress)",
      choices: statusOptions,
      type: "string",
    },
  },
  handler: ({ filter = "all"  }) => {
    const tasks = loadTasks();
    const filteredTasks =
      filter === "all"
        ? tasks
        : tasks.filter((task) => task.status === filter);
    if (filteredTasks.length === 0) {
      console.log("No tasks found.");
    } else {
      console.log("Tasks:");
      filteredTasks.forEach((task) =>
        console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`)
      );
    }
  },
});

yargs.parse();
