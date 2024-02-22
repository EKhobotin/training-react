import React, { useContext, useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { Counter } from "./components/Counter/Counter";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import colors from "./assets/colors.json";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { RegisterFormUncontrolled } from "./components/RegisterForm/RegisterFormUncontrolled";
import { Employee } from "./components/Employee/Employee";
import Modal from "./components/Modal/Modal";
import { Posts } from "./components/Posts/Posts";
import { UserContext } from "./context/Context.Provider";

export const App = ({ user }) => {
  const { login, logout, isOnline } = useContext(UserContext);
  const [loginUser, setloginUser] = useState("");
  // console.log(isOnline);

  // if (!isOnline) {
  //   return (
  //     <>
  //       <input
  //         value={loginUser}
  //         onChange={(e) => setloginUser(e.target.value)}
  //       />
  //       <button onClick={() => login(loginUser)}>Login</button>
  //     </>
  //   );
  // }
  return (
    <>
      {/* <Posts user={user} /> */}
      <Counter />
      {/* <ColorPicker colors={colors} /> */}
      {/* <TodoList /> */}
      {/* <RegisterForm /> */}
      {/* <RegisterFormUncontrolled /> */}
      {/* <Employee /> */}
    </>
  );
};
