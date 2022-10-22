import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    status: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    }
})