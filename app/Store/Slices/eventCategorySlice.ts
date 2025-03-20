import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {eventCategory } from "../../Types/index";

const initialState: eventCategory[] = [
  { id: 1, type: "Practice" },
  { id: 2, type: "Event" },
  { id: 3, type: "Show" },
];

const eventCategorySlice = createSlice({
  name: "eventTypes",
  initialState,
  reducers: {
    seteventType: (state, action: PayloadAction<eventCategory[]>) => {
      return action.payload;
    },
    addeventType: (state, action: PayloadAction<eventCategory>) => {
      state.push(action.payload);
    },
  },
});

export const { seteventType, addeventType } = eventCategorySlice.actions;
export default eventCategorySlice.reducer;
