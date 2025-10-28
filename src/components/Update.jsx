import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [todo, setTodo] = useState({ id: 0, title: "", completed: false });
  const [msg, setMsg] = useState("");

  const handleUpdate = async () => {
    try {
      const resp = await axios.put(`https://todo-backend-1-5mn0.onrender.com/todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed,
      });
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
    }
  };

  return (
    <>
      <h1>Update Todo</h1>
      <input
        type="text"
        placeholder="Todo ID"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="New Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        Completed
      </label>
      <button onClick={handleUpdate}>Update</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Update;
