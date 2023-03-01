import React from "react";

const TodoFilter = ({ filter, onChangeFilter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded bg-white p-4 text-gray-400 dark:bg-gray-800">
        <button
          onClick={() => onChangeFilter("all")}
          className={`${
            filter === "all"
              ? "text-blue-600 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => onChangeFilter("active")}
          className={`${
            filter === "active"
              ? "text-blue-600 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onChangeFilter("completed")}
          className={`${
            filter === "completed"
              ? "text-blue-600 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
