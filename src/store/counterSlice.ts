// import { reducerWithInitialState } from 'typescript-fsa-reducers'

// export interface State {
// //ここにstoreが持つstateを書く

// }

// export const initialState: State = {
// //ここにstateの初期値を書く

// }

// export const Reducer = reducerWithInitialState(initialState)

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    additional: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count += action.payload;
    },
    subtraction: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count -= action.payload;
    },
  },
});

export const { additional, subtraction } = counterSlice.actions;
export default counterSlice.reducer;