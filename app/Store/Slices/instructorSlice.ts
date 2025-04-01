import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";

const initialState: Instructor[] = [
  { id: 1, name: "Alexander", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 2, name: "Lisa", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 3, name: "Noah", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 4, name: "Eliza", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 5, name: "Agnes", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 6, name: "Liv", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
];

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
