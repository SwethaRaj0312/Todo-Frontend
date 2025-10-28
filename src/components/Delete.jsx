import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(`https://todo-backend-1-5mn0.onrender.com/todos/${id}`);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
    }
  };

  return (
    <>
      <h1>Delete Todo</h1>
      <input
        type="text"
        placeholder="Todo ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Delete;
