function addTask() {
  let inputTask = document.getElementById('input-task');
  let task = inputTask.value.trim();
  
  if (!task) {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.addEventListener('change', function() {
  this.parentNode.classList.toggle('completed');
  });

  let taskText = document.createElement('p');
  taskText.textContent = task;

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(taskText);
  
  let tasksContainer = document.getElementById('tasks');
  tasksContainer.appendChild(taskDiv);

  inputTask.value = '';

  taskDiv.appendChild(checkBox);
  taskText.style.marginLeft = '10px';
   taskDiv.appendChild(taskText);
}
  
let button = document.getElementById('button1');

button.addEventListener('click', function() {
    let tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';
});
