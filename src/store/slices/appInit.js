import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'appInit',
  initialState,
  reducers: {
    init() {},
    uninit() {},
  },
});

export const {reducer} = slice;

export const init = () => dispatch => dispatch(slice.actions.init());

export const uninit = () => dispatch => dispatch(slice.actions.uninit());

export default slice;
