// script.js
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
    
      if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        // Botão para excluir a tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
          newTask.remove(); // Remove a tarefa ao clicar no botão "Excluir"
        });
        
        newTask.appendChild(deleteButton); // Adiciona o botão "Excluir" à tarefa
        taskList.appendChild(newTask);
        
        taskInput.value = '';
      } else {
        alert('Por favor, insira uma tarefa válida.');
      }
    });
  
    // Restante do seu código para filtrar tarefas...
  });
  
const allTasksBtn = document.getElementById('allTasksBtn');
const pendingTasksBtn = document.getElementById('pendingTasksBtn');
const completedTasksBtn = document.getElementById('completedTasksBtn');

allTasksBtn.addEventListener('click', function() {
  showTasks('all');
});

pendingTasksBtn.addEventListener('click', function() {
  showTasks('pending');
});

completedTasksBtn.addEventListener('click', function() {
  showTasks('completed');
});

function showTasks(filter) {
  const tasks = document.querySelectorAll('#taskList li');
  
  tasks.forEach(function(task) {
    const isCompleted = task.classList.contains('completed');
    
    switch (filter) {
      case 'all':
        task.style.display = 'block';
        break;
      case 'pending':
        task.style.display = isCompleted ? 'none' : 'block';
        break;
      case 'completed':
        task.style.display = isCompleted ? 'block' : 'none';
        break;
    }
  });
}




