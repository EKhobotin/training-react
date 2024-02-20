import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { Counter } from "./components/Counter/Counter";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import colors from "./assets/colors.json";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { RegisterFormUncontrolled } from "./components/RegisterForm/RegisterFormUncontrolled";
import { Employee } from "./components/Employee/Employee";

export const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <ColorPicker colors={colors} /> */}
      {/* <TodoList /> */}
      {/* <RegisterForm /> */}
      {/* <RegisterFormUncontrolled /> */}
      <Employee />
    </>
  );
};
