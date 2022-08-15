import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog-slice";
import messageSlice from "./messageSlice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    msg: messageSlice.reducer,
    blogs: blogSlice.reducer,
    users: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
