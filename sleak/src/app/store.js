import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export default configureStore({
  reduecer: {
    counter: counterReducer,
  },
});
