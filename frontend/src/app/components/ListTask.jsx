async function loadTasks() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/task/`);
    const tasks = await res.json();
    return tasks;
}

async function ListTask() {
    const tasks = await loadTasks();
    console.log(tasks);
    return (
        <div className="bg-slate-700 p-4 w-full">
            <h1>Lista de tareas</h1>
            {tasks.map((task) => (
                <div key={task.id} className="bg-slate-500 px-4 py-3 mb-2 rounded-md flex justify-between items-center">
                    <div>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                    </div>
                    <div class="inline-flex gap-x-2">
                        <button class="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-bold py-2 px-4 rounded-l">
                            Editar
                        </button>
                        <button class="bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r">
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListTask;
