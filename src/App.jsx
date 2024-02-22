import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { Counter } from "./components/Counter/Counter";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import colors from "./assets/colors.json";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { RegisterFormUncontrolled } from "./components/RegisterForm/RegisterFormUncontrolled";
import { Employee } from "./components/Employee/Employee";
import Modal from "./components/Modal/Modal";
import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <>
      {/* <Posts /> */}
      {/* <Counter /> */}
      {/* <ColorPicker colors={colors} /> */}
      <TodoList />
      {/* <RegisterForm /> */}
      {/* <RegisterFormUncontrolled /> */}
      {/* <Employee /> */}
    </>
  );
};
