import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Instructor {
  id: number;
  name: string;
}

interface PlanningEvent {
  id: number;
  title: string;
  instructors: Instructor[];
  type: string;
  description: string;
  date: Date;
  location: string;
}

const initialInstructorState: Instructor[] = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Lisa" },
  { id: 3, name: "Noah" },
  { id: 4, name: "Eliza" },
  { id: 5, name: "Agnes" },
  { id: 6, name: "Liv" },
];

const initialState: PlanningEvent[] = [
  {
    id: 1,
    title: "Springmusene",
    instructors: initialInstructorState.slice(0,6),
    type: "practice",
    description: "bob",
    date: new Date(),
    location: "Kildegården 9",
  },
  {
    id: 2,
    title: "Supernovaer",
    instructors: initialInstructorState.slice(0,5),
    type: "practice",
    description: "bob",
    date: new Date(),
    location: "Kildegården 9",
  },
  {
    id: 3,
    title: "Stjerneskud",
    instructors: initialInstructorState.slice(0,4),
    type: "practice",
    description: "bob",
    date: new Date(),
    location: "Kildegården 9",
  },
  {
    id: 4,
    title: "Springmix",
    instructors: initialInstructorState.slice(0,3),
    type: "practice",
    description: "bob",
    date: new Date(),
    location: "Kildegården 9",
  },
  {
    id: 5,
    title: "Power Boys",
    instructors: initialInstructorState.slice(0,2),
    type: "practice",
    description: "bob",
    date: new Date(),
    location: "Kildegården 9",
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
