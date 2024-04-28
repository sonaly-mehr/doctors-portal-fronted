import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: '',
    // city: '',
    // distance: '',
    // maxGroupSize: ''
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getSearchTerm: (state, action)=> {
            state.searchTerm = action.payload
            // state.city = action.payload,
            // state.distance = action.payload,
            // state.maxGroupSize = action.payload
        },
    }
});

export const {getSearchTerm} = searchSlice.actions;

export default searchSlice.reducer