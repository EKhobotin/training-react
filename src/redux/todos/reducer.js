import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import { addTodo, deleteTodo, setFilter, toggleTodo } from "./action";

const initialState = {
  todos: [{ id: 1, title: "123456", completed: false }],
  filter: "all",
};

// export const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.deleteTodo:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     case actionTypes.addTodo:
//       return { ...state, todos: [...state.todos, action.payload] };
//     case actionTypes.toggleTodo:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case actionTypes.setFilter:
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    })
    .addCase(addTodo, (state, action) => {
      // state.todos = [...state.todos, action.payload];
      state.todos.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      // state.todos = state.todos.map((todo) =>
      //   todo.id === action.payload
      //     ? { ...todo, completed: !todo.completed }
      //     : todo
      // );
      const todo = state.todos.find((todo) => (todo.id = action.payload));
      todo.completed = !todo.completed;
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});
