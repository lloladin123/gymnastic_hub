import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from "./Slices/instructorSlice";
import eventReducer from "./Slices/eventSlice";
import venueReducer from "./Slices/venueSlice"
import eventCategoryReducer from "./Slices/eventCategorySlice"

export const store = configureStore({
  reducer: {
    instructors: instructorReducer,
    events: eventReducer,
    venues: venueReducer,
    eventCategories: eventCategoryReducer,
  },
});

// 🔹 Setup TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
