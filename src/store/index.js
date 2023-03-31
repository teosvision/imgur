import { configureStore } from "@reduxjs/toolkit";
import ImagesReducer from "./reducers/images";

export const store = configureStore({
  reducer: {
    image: ImagesReducer,
  },
});
