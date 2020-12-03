import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'appInit',
  initialState,
  reducers: {
    appInit() {},
    appUninit() {},
  },
});

export const {reducer} = slice;

export const init = () => dispatch => dispatch(slice.actions.appInit());

export const uninit = () => dispatch => dispatch(slice.actions.appUninit());

export default slice;
