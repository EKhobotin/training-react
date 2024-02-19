import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { Counter } from "./components/Counter/Counter";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import colors from "./assets/colors.json";

export const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <ColorPicker colors={colors} /> */}
      <TodoList />
    </>
  );
};
