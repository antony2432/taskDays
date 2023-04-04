import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  taskTarget: {},
  length: 0,
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload;
      state.length = state.tasks.length;
    },
    setTaskTarget: (state, action) => {
      state.taskTarget = state.tasks.filter(
        (task) => task.id === action.payload
      );
    },
  },
});

export const { setTask, setTaskTarget } = tasksSlice.actions;
export default tasksSlice.reducer;
