import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
