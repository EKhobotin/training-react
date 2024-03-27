import { createReducer } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import { changeStep, decrement, increment, reset } from "./action";
// 1. Створити стейт початковий
const initialState = {
  counter: 0,
  step: 1,
};
// 2. Свторити функцію, котра буде керувати стейтом
// Приймає два параметра - стейт та екшн
// state - дані з чим працює функція
// action - подія, яку присилає діспатч
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.increment:
//       return { ...state, counter: state.counter + state.step };
//     case actionTypes.decrement:
//       return { ...state, counter: state.counter - state.step };
//     case actionTypes.reset:
//       return { ...state, counter: 0, step: 1 };
//     case actionTypes.changeStep:
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// };

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.counter += state.step;
    })
    .addCase(decrement, (state) => {
      state.counter -= state.step;
    })
    .addCase(reset, (state) => {
      state.counter = 0;
      state.step = 1;
    })
    .addCase(changeStep, (state, action) => {
      state.step = +action.payload;
    });
});
