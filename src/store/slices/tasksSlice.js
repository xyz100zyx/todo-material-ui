import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TaskService from "../../services/TaskService";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async function (data, { rejectWithValue }) {
    try {
      const tasks = await TaskService.getTasks(data.userId, data.projectId)
      .then((data) => data.data.tasks);
      return tasks;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  tasks: [],
  activeTask: {},
  status: null,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setActiveTask: (state, action) => {
        state.activeTask = action.payload;
    },
    updateTask: (state, action) => {
      state.tasks.map(task => {
        if(task.id === state.activeTask.id){
          task.description = action.payload.description;
          task.priority = action.payload.priority;
          task.time_to_pass = action.payload.timeToPass;
        }
      })
      state.activeTask = {}
    },
    createTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      state.activeTask = {}
    }
  },
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.status = "loading";
    },
    [getTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
      state.status = "loaded";
    },
    [getTasks.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    },
  },
});

export const {setActiveTask, updateTask, createTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
