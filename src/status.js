export function updateStatus(index, tasksList){
    if(tasksList[index].completed == true){
        tasksList[index].completed = false; 
    } else{
        tasksList[index].completed = true;
    }
    
    console.log(tasksList[index]);
    localStorage.setItem('tasks', JSON.stringify(tasksList));
    
    tasksList = JSON.parse(localStorage.getItem('tasks'));
}
