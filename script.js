// DOM Elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const prioritySelect = document.getElementById('priority-select');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// Add Task Functionality
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText !== "") {
        addTaskToList(taskText, priority);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});

function addTaskToList(taskText, priority) {
    // Create List Item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.innerHTML = `
        <span>${taskText} <em>(${priority})</em></span>
        <button class="delete-button">Delete</button>
    `;

    // Mark as Completed
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Delete Task
    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        listItem.remove();
    });

    todoList.appendChild(listItem);
}

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
