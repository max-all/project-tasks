"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [tasks, setTasks] = useState(["teste 1", "teste 2"]);

  /// useEffect ao montar o componente
  useEffect(() => {
    const taskStorage = localStorage.getItem("@tasks");

    if (taskStorage) {
      setTasks(JSON.parse(taskStorage));
    }
  }, []);

  /// useEffect ao manipular tasks
  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (inputName != "") {
      setTasks([...tasks, inputName]);
      setInputName("");
    }
  }

  return (
    <div>
      <h1>Bem vindo ao Projeto Tasks</h1>

      <form onSubmit={handleSubmit}>
        <label>Tarefa:</label> <br />
        <input
          type="text"
          placeholder="Digite uma Tarefa"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <br />
      <br />

      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
