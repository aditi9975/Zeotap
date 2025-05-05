import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { text: task.trim(), done: false };
    const updatedTasks = [...tasks, newTask];
    const sortedTasks = updatedTasks.sort((a, b) =>
      sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );
    setTasks(sortedTasks);
    setTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const saveEdit = (index) => {
    if (editText.trim() === "") return;
    const updated = [...tasks];
    updated[index].text = editText.trim();
    setTasks(updated);
    setEditIndex(null);
    setEditText("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "not_done") return !task.done;
    return true;
  });

  const toggleSort = () => {
    const newSortAsc = !sortAsc;
    setSortAsc(newSortAsc);
    const sorted = [...tasks].sort((a, b) =>
      newSortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );
    setTasks(sorted);
  };

  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.done);
    setTasks(activeTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>

      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded mb-4 w-full"
        onClick={addTask}
      >
        Add Task
      </button>

      <div className="flex justify-between mb-3 text-sm">
        <span>Total: {tasks.length}</span>
        <span>Done: {tasks.filter((t) => t.done).length}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <button onClick={() => setFilter("all")} className="border px-2 py-1 rounded">
          Show All
        </button>
        <button onClick={() => setFilter("done")} className="border px-2 py-1 rounded">
          Show Done
        </button>
        <button onClick={() => setFilter("not_done")} className="border px-2 py-1 rounded">
          Show Not Done
        </button>
        <button onClick={toggleSort} className="border px-2 py-1 rounded">
          Sort {sortAsc ? "A→Z" : "Z→A"}
        </button>
        <button onClick={clearCompleted} className="border px-2 py-1 rounded bg-red-100 hover:bg-red-200">
          Clear Completed
        </button>
      </div>

      <ul>
        {filteredTasks.map((task, idx) => {
          // Find actual index in full list
          const actualIndex = tasks.findIndex(t => t.text === task.text && t.done === task.done);

          return (
            <li
              key={idx}
              className={`flex justify-between items-center p-2 border rounded mb-2 ${
                task.done ? "bg-green-100 line-through" : ""
              }`}
            >
              {editIndex === actualIndex ? (
                <input
                  className="flex-1 mr-2 border px-2 py-1 rounded"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(actualIndex)}
                />
              ) : (
                <span className="flex-1">{task.text}</span>
              )}

              <div className="flex items-center gap-2 ml-2">
                <button onClick={() => toggleDone(actualIndex)} title="Toggle Done">
                  {task.done ? "✅" : "⬜"}
                </button>

                {editIndex === actualIndex ? (
                  <button onClick={() => saveEdit(actualIndex)} className="text-green-600" title="Save">
                    💾
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditIndex(actualIndex);
                      setEditText(task.text);
                    }}
                    className="text-blue-600"
                    title="Edit"
                  >
                    ✏️
                  </button>
                )}

                <button
                  onClick={() => removeTask(actualIndex)}
                  className="text-red-500"
                  title="Delete"
                >
                  ❌
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
