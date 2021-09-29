import { createStore } from "redux";

// To be developed

const theManagerReducer = (state, action) => {
  if (action.type === "adults") {
    return;
  }
  if (action.type === "children") {
    return;
  }
  return state;
};

const store = createStore(theManagerReducer);

export default store;
