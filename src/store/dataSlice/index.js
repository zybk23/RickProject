import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getLocations = createAsyncThunk('data/getLocations', async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/location');
  return response.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    locations: {},
    selectedFilter: {id: 1, name: 'All'},
    filterOptions: [
      {
        id: 1,
        name: 'All',
      },
      {
        id: 2,
        name: 'Alive',
      },
      {
        id: 3,
        name: 'Dead',
      },
      {
        id: 4,
        name: 'unknown',
      },
    ],
  },
  reducers: {
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setResetSelectedFilter: (state, action) => {
      state.selectedFilter = {id: 1, name: 'All'};
    },
  },
  extraReducers: {
    [getLocations.fulfilled]: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const {setSelectedFilter, setResetSelectedFilter} = dataSlice.actions;

export default dataSlice.reducer;
