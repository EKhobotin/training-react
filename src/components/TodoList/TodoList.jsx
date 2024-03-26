import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectTodos } from "../../redux/todos/selectors";
import { actionTypes } from "../../redux/todos/actionTypes";
import {
  addTodo,
  deleteTodo,
  setFilter,
  toggleTodo,
} from "../../redux/todos/action";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // const [todoId, setTodoId] = useState()
  const [todoTitle, setTodotitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: crypto.randomUUID(), title: todoTitle };
    dispatch(addTodo(newTodo));
    setTodotitle("");
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodotitle(e.target.value)}
        />
        <button>Add todo</button>
      </form>
      <div>
        <button
          style={{ color: filter === "all" && "blue" }}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
        <button
          style={{ color: filter === "active" && "blue" }}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </button>
        <button
          style={{ color: filter === "completed" && "blue" }}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
