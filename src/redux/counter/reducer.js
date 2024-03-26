import { actionTypes } from "./actionTypes";
// 1. Створити стейт початковий
const initialState = {
  counter: 0,
  step: 0,
};
// 2. Свторити функцію, котра буде керувати стейтом
// Приймає два параметра - стейт та екшн
// state - дані з чим працює функція
// action - подія, яку присилає діспатч
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return { ...state, counter: state.counter + state.step };
    case actionTypes.decrement:
      return { ...state, counter: state.counter - state.step };
    case actionTypes.reset:
      return { ...state, counter: 0, step: 1 };
    case actionTypes.changeStep:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
