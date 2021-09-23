import { createStore } from "redux";

const theManagerReducer = (state = { counter: 0 }, action) => {
  if (action.type === "adults") {
    return;
  }
  if (action.type === "decrement") {
    return { counter: state.counter + 1 };
  }
  return state;
};

const store = createStore(theManagerReducer);

export default store;
