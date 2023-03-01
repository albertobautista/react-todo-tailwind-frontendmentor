import React from "react";

const TodoComputed = ({ computedItemsLeft, onClearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-800">
      <span className="text-gray-400 dark:text-gray-300">
        {computedItemsLeft} items left
      </span>
      <button
        onClick={onClearCompleted}
        className="text-gray-400 dark:text-gray-300"
      >
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
