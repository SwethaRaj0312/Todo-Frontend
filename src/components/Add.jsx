import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [todo, setTodo] = useState({ id: 0, title: "", completed: false });
  const [msg, setMsg] = useState("");

  const handleAdd = async () => {
    try {
      const resp = await axios.post("https://todo-backend-1-5mn0.onrender.com/todos", todo);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
    }
  };

  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Todo ID"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Todo Title"
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
      <button onClick={handleAdd}>Add</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Add;
