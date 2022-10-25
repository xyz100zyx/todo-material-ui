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

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.activeProject = action.payload;
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
        }
    }
})

export const {setActive} = projectsSlice.actions;
export default projectsSlice.reducer;