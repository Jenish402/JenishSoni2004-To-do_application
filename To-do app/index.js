const inputBox = document.getElementById('task-inputBox');
const taskList = document.getElementById('task-List');

function addTask(){
    if(inputBox.value === ""){
        alert("Enter your task...");
    }
    else{
        let taskVar = document.createElement('li');
        taskVar.innerHTML = inputBox.value;
        taskList.appendChild(taskVar);
        let cross = document.createElement('span');
        cross.innerHTML = '\u00d7';
        taskVar.appendChild(cross);
    }
    inputBox.value = '';
    savaData();
}

taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savaData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savaData();
    }
}, false);

function savaData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function displaData(){
    taskList.innerHTML = localStorage.getItem("data");
}

displaData();