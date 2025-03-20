import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../../Types/index";
import { PlanningEvent } from "../../Types/index";

const initialInstructorState: Instructor[] = [
  { id: 1, name: "Alexander", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 2, name: "Lisa", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 3, name: "Noah", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 4, name: "Eliza", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 5, name: "Agnes", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 6, name: "Liv", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
];

const initialState: PlanningEvent[] = [
  {
    id: 1,
    title: "Springmusene",
    instructors: initialInstructorState.slice(0,6),
    categoryId: 1,
    description: "bob",
    date: new Date(),
    venueId: 1,
  },
  {
    id: 2,
    title: "Supernovaer",
    instructors: initialInstructorState.slice(0,5),
    categoryId: 1,
    description: "bob",
    date: new Date(),
    venueId: 1,
  },
  {
    id: 3,
    title: "Stjerneskud",
    instructors: initialInstructorState.slice(0,4),
    categoryId: 1,
    description: "bob",
    date: new Date(),
    venueId: 1,
  },
  {
    id: 4,
    title: "Springmix",
    instructors: initialInstructorState.slice(0,3),
    categoryId: 1,
    description: "bob",
    date: new Date(),
    venueId: 1,
  },
  {
    id: 5,
    title: "Power Boys",
    instructors: initialInstructorState.slice(0,2),
    categoryId: 1,
    description: "bob",
    date: new Date(),
    venueId: 1,
  },
];

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<PlanningEvent[]>) => {
      return action.payload;
    },
    addEvent: (state, action: PayloadAction<PlanningEvent>) => {
      state.push(action.payload);
    },
  },
});

export const { setEvents, addEvent } = eventSlice.actions;
export default eventSlice.reducer;
