
# Task Tracker CLI

Task Tracker CLI is a Node.js-based command-line application to manage tasks efficiently. It allows you to add, update, delete, and track the status of tasks. Tasks are stored in a JSON file, making it simple to maintain and manage.

## Project URL
- https://roadmap.sh/projects/task-tracker

## Features

- **Add Tasks**: Add new tasks with a title.
- **Update Tasks**: Update the title of an existing task.
- **Delete Tasks**: Remove a task by its ID.
- **Change Task Status**: Mark tasks as "not done," "in progress," or "done."
- **List Tasks**: View all tasks or filter them based on their status.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/): Version 12 or higher.

## Installation

1. ### Clone the repository:
  ```
   git clone <repository-url>
   cd <repository-folder>
  ``` 

2. ### Install dependencies:
  ```
  npm install
  ```

3. ### Create the tasks.json file in the root directory (if not created automatically):
  ```
    echo "[]" > tasks.json
  ```

## Usage

### Run the script using Node.js:
 ```
  node tasks.js <command> [options]
```
## Commands

1. ### Add a Task
Add a new task with a title.
  ```
  node tasks.js add --title="My New Task"
  ```

2. ### Update a Task
Update the title of an existing task.
  ```
  node tasks.js update --id=<task-id> --title="Updated Task Title"
  ```

3. ### Delete a Task
Delete a task by its ID.
  ```
  node tasks.js delete --id=<task-id>
  ```

4. ### Change Task Status
Update the status of a task.
  ```
  node tasks.js status --id=<task-id> --status="in progress"
  ```

5. ### List Tasks
List all tasks or filter tasks by status.

- List all tasks:
  ```
  node tasks.js list
  ```
- List tasks by status (not done, in progress, done):
  ```
  node tasks.js list --filter="done"
  ```

## Example

1. ### Add a task:
  ```
   node tasks.js add --title="Finish CLI project"
   Output:
   Task added: "Finish CLI project"
  ```
  
2. ### List tasks:
  ```
   node tasks.js list
   Output:
   Tasks:
   ID: 1, Title: Finish CLI project, Status: not done
  ```

3. ### Update task status:
  ```
   node tasks.js status --id=1 --status="in progress"
   Output:
   Task with ID 1 status updated to "in progress".
  ```

## File Structure
  ```
  .
  ├── tasks.js        # Main CLI script
  ├── tasks.json      # JSON file to store tasks
  ├── package.json    # Project dependencies
  └── README.md       # Documentation
  ``` 

## Dependencies

- fs: File system module (built-in in Node.js).
- yargs: Argument parser for building CLI tools.

### Install dependencies using:
  ```
  npm install yargs
  ```

## License
This project is licensed under the MIT License.
