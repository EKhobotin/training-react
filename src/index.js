import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createContext } from "react";
import { ContextProvider } from "./context/Context.Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));

//прокидання через пропси-дріллінг
const user = { name: "Petro" };

// через контекст
export const MyContext = createContext(null);
const userContext = {
  age: 48,
  email: "123@123",
  sayHello: (firstname) => {
    console.log(`Hello,${firstname}`);
    return `Hello,${firstname}`;
  },
};

root.render(
  <MyContext.Provider value={userContext}>
    <ContextProvider>
      <App user={user} />
    </ContextProvider>
  </MyContext.Provider>
);
