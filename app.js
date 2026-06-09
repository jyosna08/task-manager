let tasks = getTasks();

displayTasks(tasks);

function addTask(){

    const input =
    document.getElementById("taskInput");

    if(input.value === ""){
        return;
    }

    const task = {
        id: Date.now(),
        title: input.value
    };

    tasks.push(task);

    saveTasks(tasks);

    displayTasks(tasks);

    input.value = "";
}

function deleteTask(id){

    tasks =
    tasks.filter(
        task => task.id !== id
    );

    saveTasks(tasks);

    displayTasks(tasks);
}

function editTask(id){

    const task =
    tasks.find(
        t => t.id === id
    );

    const newTitle =
    prompt(
        "Edit Task",
        task.title
    );

    if(newTitle){

        task.title = newTitle;

        saveTasks(tasks);

        displayTasks(tasks);
    }
}

document
.getElementById("addBtn")
.addEventListener(
    "click",
    addTask
);

document
.getElementById("searchInput")
.addEventListener(
    "keyup",
    function(){

        const search =
        this.value.toLowerCase();

        const filtered =
        tasks.filter(task =>
            task.title
            .toLowerCase()
            .includes(search)
        );

        displayTasks(filtered);
    }
);