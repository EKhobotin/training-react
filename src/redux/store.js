// Імпортуємо функцію createStore , combineReducers
// CreateStore - конфігуратор для створення стору( сховище даних)

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todos/todoSlice";

// Встановлюємо пакет для devToolss та використовуємо йог
const devtools = devToolsEnhancer();

// Збираємо до купи всі редьюсери в один великий об'єкт
const rootReducer = combineReducers({
  counterData: counterReducer,
  todoData: todoReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Екпортуємо наш стор з файлу, передаємо рут редьюсер, щоб працював доступ і маніпуляція з даними
// Другий аргумент, не обов'язковий! Це девтулз, для дебагу
// export const store = createStore(rootReducer, devtools);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devtools: true - за умовчанням вже є тру
  //вимикає інструменти реакту при деплої сторінки на продуктивний хостинг
  devtools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
