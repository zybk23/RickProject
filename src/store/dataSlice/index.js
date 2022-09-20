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
  },
  reducers: {},
  extraReducers: {
    [getLocations.fulfilled]: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const {setCartData} = dataSlice.actions;

export default dataSlice.reducer;
