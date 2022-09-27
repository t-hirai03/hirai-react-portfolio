import { createSlice, Slice } from '@reduxjs/toolkit'

export const counterSlice :Slice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
  },
  reducers: {
    increment: (state) => {
      state.value = true
    },
    decrement: (state) => {
      state.value = false
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export const selectCount = (state: any) => {return state.counter.value};

export default counterSlice.reducer