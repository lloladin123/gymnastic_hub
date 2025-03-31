import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";

const initialState: Instructor[] = [];

const instructorSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    setInstructors: (state, action: PayloadAction<Instructor[]>) => {
      return action.payload;
    },
    addInstructor: (state, action: PayloadAction<Instructor>) => {
      state.push(action.payload);
    },
  },
});

export const { setInstructors, addInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
