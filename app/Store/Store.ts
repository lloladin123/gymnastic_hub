import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from "./Slices/instructorSlice";
import eventReducer from "./Slices/eventSlice";

export const store = configureStore({
  reducer: {
    instructors: instructorReducer,
    events: eventReducer,
  },
});

// 🔹 Setup TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
