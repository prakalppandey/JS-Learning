
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("taskInput");
    const addTask = document.getElementById("addTaskBtn");
    const tasklist = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem('task')) || [];

    tasks.forEach(task => {
        renderTask(task);
    });

    addTask.addEventListener('click', function () {
        const triminput = input.value.trim();

        if (triminput === "") return;

        const newtasktoadd = {
            id: crypto.randomUUID(),
            task: triminput,
            complete: false
        };

        tasks.push(newtasktoadd);
        saveTask();
        renderTask(newtasktoadd);

        input.value = "";
        input.focus();
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if (task.complete) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = task.task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;

            task.complete = !task.complete;
            li.classList.toggle("completed");
            saveTask();
        });

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            tasks = tasks.filter((t) => t.id !== task.id);

            li.remove();
            saveTask();
        });

        tasklist.appendChild(li);
    }

    function saveTask() {
        localStorage.setItem('task', JSON.stringify(tasks));
    }
});
