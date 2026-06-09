function saveTasks(tasks){
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function getTasks(){
    return JSON.parse(
        localStorage.getItem("tasks")
    ) || [];
}