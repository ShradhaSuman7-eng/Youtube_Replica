import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataStored: null,
  },
  reducers: {
    addDataStored: (state, action) => {
      state.dataStored = action.payload;
    },
  },
});

export const { addDataStored } = dataSlice.actions;
export default dataSlice.reducer;
