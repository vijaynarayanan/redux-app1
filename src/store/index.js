import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { counterSlice } from "./counter-slice";

/*const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};*/

//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
