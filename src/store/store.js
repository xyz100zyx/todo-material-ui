import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import projectsReducer from "./slices/projectsSlice";
import tasksReducer from "./slices/tasksSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        projects: projectsReducer,
        tasks: tasksReducer,
    }
})

export default store;