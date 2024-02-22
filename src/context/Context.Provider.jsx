import { createContext, useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const login = (userName) => {
    setUserName(userName);
    setIsOnline(true);
  };
  const logout = () => {
    setUserName("");
    setIsOnline(false);
  };

  const contextValue = { userName, isOnline, login, logout };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
