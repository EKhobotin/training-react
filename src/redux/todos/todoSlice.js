import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  todos: [{ id: 1, title: "123456", completed: false }],
  filter: "all",
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    addTodo: {
      prepare: (title) => {
        return {
          payload: {
            title,
            completed: false,
            id: nanoid(),
            createAt: moment().format("DD.MM.YYYY hh:mm:ss"),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.todos.push(payload);
      },
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { deleteTodo, toggleTodo, addTodo, setFilter } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
