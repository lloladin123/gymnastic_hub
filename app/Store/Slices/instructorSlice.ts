import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";

const initialState: Instructor[] = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Lisa" },
  { id: 3, name: "Noah" },
  { id: 4, name: "Eliza" },
  { id: 5, name: "Agnes" },
  { id: 6, name: "Liv" },
];

const instructorSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    addInstructor: (state, action: PayloadAction<Instructor>) => {
      state.push(action.payload);
    },
  },
});

export const { addInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
