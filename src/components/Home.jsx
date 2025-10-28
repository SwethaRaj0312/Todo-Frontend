import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/todos");
      setTodos(resp.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        todos.map((t) => (
          <h2 key={t.id}>
            {t.id}. {t.title} — {t.completed ? "✅ Done" : "❌ Pending"}
          </h2>
        ))
      ) : (
        <h3>No todos yet</h3>
      )}
    </>
  );
}

export default Home;
