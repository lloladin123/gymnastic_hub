import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";
import { mockInstructorsData } from "../../data/MockData/index";
import { InstructorState } from "@/app/Types/stateTypes";


const initialState: InstructorState = {
  instructors: mockInstructorsData,
};

const instructorSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    setInstructors: (state, action: PayloadAction<Instructor[]>) => {
      state.instructors = action.payload;
    },
    addInstructor: (state, action: PayloadAction<Instructor>) => {
      state.instructors.push(action.payload);
    },
  },
});

export const { setInstructors, addInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
