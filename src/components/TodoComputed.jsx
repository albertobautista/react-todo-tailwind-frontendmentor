import React from "react";

const TodoComputed = ({ computedItemsLeft, onClearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button onClick={onClearCompleted} className="text-gray-400">
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
