document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    
    li.textContent = task;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    li.appendChild(removeButton);
    taskList.appendChild(li);
}