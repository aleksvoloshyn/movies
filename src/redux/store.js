import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const myValueSlice = createSlice({
  name: 'names',
  initialState: [
    { id: 1, name: 'Alex', age: 38, position: 'owner' },
    { id: 2, name: 'Vasily', age: 30, position: 'hr' },
    { id: 3, name: 'Olga', age: 24, position: 'accounter' },
  ],
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
  },
})

export const { add } = myValueSlice.actions

export const store = configureStore({
  reducer: {
    contacts: myValueSlice.reducer,
  },
})
