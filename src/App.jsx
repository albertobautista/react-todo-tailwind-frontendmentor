import React, { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: true },
  { id: 2, title: "Complete online JavaScript course", completed: false },
  { id: 3, title: "Go to stadium", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");

  const handleCreateTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleUpdateTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const handleClearCompletedTodo = () => {
    const clearTodos = todos.filter((todo) => !todo.completed);
    setTodos(clearTodos);
  };

  const handleFilterTodos = () => {
    console.log(filter);
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const handleChangeFilter = (filter) => setFilter(filter);

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate onCreateTodo={handleCreateTodo} />

        <TodoList
          todos={handleFilterTodos()}
          onRemoveTodo={handleRemoveTodo}
          onUpdateTodo={handleUpdateTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          onClearCompleted={handleClearCompletedTodo}
        />

        <TodoFilter filter={filter} onChangeFilter={handleChangeFilter} />
      </main>
      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
