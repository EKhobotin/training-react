// Імпортуємо функцію createStore , combineReducers
// CreateStore - конфігуратор для створення стору( сховище даних)

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todoReducer } from "./todos/reducer";

// Встановлюємо пакет для devToolss та використовуємо йог
const devtools = devToolsEnhancer();

// Збираємо до купи всі редьюсери в один великий об'єкт
const rootReducer = combineReducers({
  counterData: counterReducer,
  todoData: todoReducer,
});

// Екпортуємо наш стор з файлу, передаємо рут редьюсер, щоб працював доступ і маніпуляція з даними
// Другий аргумент, не обов'язковий! Це девтулз, для дебагу
export const store = createStore(rootReducer, devtools);
