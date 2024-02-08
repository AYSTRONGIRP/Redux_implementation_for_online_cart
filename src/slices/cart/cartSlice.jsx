import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false, // Array to store item data
};

export const cartSlice = createSlice({
    name: 'cartState',
    initialState,
    reducers: {
        setOpen:(state)=>{
          console.log(state.open)
          state.open=!state.open
          console.log(state.open)
        },

    }}
)

export const { setOpen } = cartSlice.actions;
export default cartSlice.reducer;
