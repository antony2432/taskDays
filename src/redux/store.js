import { configureStore } from "@reduxjs/toolkit";
import modalShowReducer from "./slices/modalShow"
import tasksSliceReducer from "./slices/tasksSlice";
export const store = configureStore({
  reducer: {
    modalShow: modalShowReducer,
    tasksSlice: tasksSliceReducer
  },
});
