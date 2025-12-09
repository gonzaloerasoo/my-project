import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = text.trim();
    if (v) {
      onAdd(v);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddTask;
