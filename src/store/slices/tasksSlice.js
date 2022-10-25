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

export const {setActiveTask} = taskSlice.actions;
export default taskSlice.reducer;
