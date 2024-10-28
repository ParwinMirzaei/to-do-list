// Select the input field, add button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue) { // Check if input is not empty
        const li = document.createElement('li'); 
        li.textContent = taskValue;

        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = 'Remove'; //remove button text
        removeButton.onclick = function() { //When remove button is clicked
            taskList.removeChild(li); // Remove the list item from the task list
        };

        li.appendChild(removeButton); // Add remove button to the list item
        taskList.appendChild(li); // Add the list item to the task list
        taskInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a task before adding."); // Alert message if input is empty
    }
}

// Add event listener to the add button
addTaskButton.addEventListener('click', addTask);

// Add event listener to the input field to listen for the "Enter" key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
        addTask(); // Call the addTask function
    }
});
