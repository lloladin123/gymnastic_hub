import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";

const initialState: Instructor[] = [];

const instructorSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    setinstructors: (state, action: PayloadAction<Instructor[]>) => {
      return action.payload;
    },
    addinstructor: (state, action: PayloadAction<Instructor>) => {
      state.push(action.payload);
    },
    initializeinstructors: (state, action: PayloadAction<Instructor[]>) => {
      const instructors = action.payload;

      return [
      {id: 1, name: "bob"},
      {id: 2, name: "bob2"},
      {id: 3, name: "bob3"},
      {id: 4, name: "bob4"},
      ];
    },
  },
});

export const { setinstructors, addinstructor, initializeinstructors } = instructorSlice.actions;
export default instructorSlice.reducer;
