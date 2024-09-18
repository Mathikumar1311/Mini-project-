document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {

        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        const taskContent = document.createElement('span'); 
        taskContent.textContent = taskText; 

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        
        deleteBtn.addEventListener('click', function() {
            taskCard.remove();
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';

        editBtn.addEventListener('click', function() {

            const newTaskText = prompt('Edit your task:', taskContent.textContent);
            
            if (newTaskText) {
                taskContent.textContent = newTaskText.trim();
            }
        });

        taskCard.appendChild(taskContent); 
        taskCard.appendChild(editBtn); 
        taskCard.appendChild(deleteBtn); 
        document.getElementById('taskList').appendChild(taskCard); 
        taskInput.value = ''; 

    } 

    else {
        alert('Please enter a task');
    }
    
});
