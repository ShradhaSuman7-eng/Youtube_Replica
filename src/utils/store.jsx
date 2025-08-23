import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import dataReducer from "./dataSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    data: dataReducer,
    chat: chatSlice,
  },
});

export default store;
