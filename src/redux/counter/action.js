import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";

// export const increment = () => ({ type: actionTypes.increment });
// export const decrement = () => ({ type: actionTypes.decrement });
// export const reset = () => ({ type: actionTypes.reset });
// export const changeStep = (step) => ({
//   type: actionTypes.changeStep,
//   payload: +step,
// });

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const changeStep = createAction("changeStep");
