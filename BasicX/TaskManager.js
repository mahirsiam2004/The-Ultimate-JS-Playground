// Task Manager Object
const taskManager = {
    tasks: [],

    // Function to Add Task
    addTask: function (task) {
        if (task.trim() === "") {
            console.log("❌ Task cannot be empty!");
            return;
        }
        this.tasks.push(task);
        console.log(`✅ Added Task: ${task}`);
        this.displayTasks();
    },

    // Function to Remove Task
    removeTask: function (index) {
        if (index >= 0 && index < this.tasks.length) {
            console.log(`🗑️ Removed Task: ${this.tasks[index]}`);
            this.tasks.splice(index, 1);
            this.displayTasks();
        } else {
            console.log("❌ Invalid task number!");
        }
    },

    // Function to Display All Tasks
    displayTasks: function () {
        console.log("\n📋 Your Tasks:");
        if (this.tasks.length === 0) {
            console.log("No tasks added yet!");
        } else {
            for (let i = 0; i < this.tasks.length; i++) {
                console.log(`${i + 1}. ${this.tasks[i]}`);
            }
        }
    },

    // Switch Case for Actions
    taskAction: function (action, task = "", index = -1) {
        switch (action) {
            case "add":
                this.addTask(task);
                break;
            case "remove":
                this.removeTask(index);
                break;
            case "list":
                this.displayTasks();
                break;
            default:
                console.log("❌ Invalid action! Use 'add', 'remove', or 'list'.");
        }
    }
};

// Example Usage
taskManager.taskAction("add", "Complete JavaScript project");
taskManager.taskAction("add", "Read a book");
taskManager.taskAction("list");
taskManager.taskAction("remove", "", 0);
taskManager.taskAction("list");
