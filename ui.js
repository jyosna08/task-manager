function displayTasks(tasks){

    const list =
    document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(task => {

        const li =
        document.createElement("li");

        li.innerHTML = `
            ${task.title}
            <button onclick="editTask(${task.id})">
                Edit
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        list.appendChild(li);

    });

}