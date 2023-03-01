import React, { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    onCreateTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-3 px-4 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none dark:bg-gray-800 dark:text-gray-300"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
