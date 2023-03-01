import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div className="mt-8 overflow-hidden rounded-t-md bg-white dark:bg-gray-800">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
