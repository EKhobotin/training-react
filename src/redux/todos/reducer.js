import { actionTypes } from "./actionTypes";

const initialState = {
  todos: [{ id: 1, title: "123456", completed: false }],
  filter: "all",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case actionTypes.addTodo:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionTypes.toggleTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case actionTypes.setFilter:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
