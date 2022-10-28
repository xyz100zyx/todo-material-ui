import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ProjectService from "../../services/ProjectService";

const initialState = {
    activeProject: {},
    projects: [],
    status: null,
    error: null,
}

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async function(userId, {rejectWithValue}){
        try{
            const projects = await ProjectService.getAllProjects(userId).then(data => data.data.projects);
            return projects;
        }catch(err){
            return rejectWithValue(err.message)
        }
    }

)

export const createProject = createAsyncThunk(
    `projects/createProject`,
    async function ([userId, title], {rejectWithValue}){
        try{
            const project = await ProjectService.create(userId, title).then(res => res.data);
            return project;
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.activeProject = action.payload;
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload.id)
        },
        clearActive: (state) => {
            state.activeProject = {};
        }
    },
    extraReducers: {
        [fetchProjects.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.projects = action.payload;
            state.status = 'loaded';
        },
        [fetchProjects.rejected]: (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        },
        [createProject.pending]: (state) => {
            state.status = 'loading'
        },
        [createProject.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.projects.push(action.payload);
        },
        [createProject.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error;
        }
    }
})

export const {setActive, deleteProject, clearActive } = projectsSlice.actions;
export default projectsSlice.reducer;