function send() {
    let inputTask = document.getElementById('input-task');
    let task = inputTask.value;
    let htmlString = '<br>' + '<input type="checkbox"><p>' + task + '</p>';

    localStorage.setItem(task, task);

    document.getElementById('tasks').innerHTML += htmlString;
    
    inputTask.value = ''; 
}

let button = document.getElementById('button1');

button.addEventListener('click', function() {
    let tasks = document.getElementById('tasks');
    tasks.innerHTML = '';
    localStorage.clear();
})
