import React from "react";
import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4 dark:bg-gray-800">
      <button
        onClick={() => onUpdateTodo(id)}
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
      >
        {completed && <IconCheck className="" />}
      </button>
      <p
        className={`grow text-gray-500 dark:text-gray-300 ${
          completed && "line-through"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => onRemoveTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
