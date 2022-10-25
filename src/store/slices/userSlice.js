import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

export const login = createAsyncThunk(
    'user/login',
    async function (data, {rejectWithValue}){
        try{
            const user = await AuthService.login(data.email, data.password).then(data => data.data);
            return user
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

const initialState = {
    user: {},
    status: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'loading';
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'loaded';
        },
        [login.rejected]: (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        }
    }
})

export default userSlice.reducer;
