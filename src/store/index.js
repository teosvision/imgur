import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./reducers/data";

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
});
