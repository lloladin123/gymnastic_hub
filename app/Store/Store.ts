import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor, PlanningEvent } from "../types";

// 🔹 Create Instructor Slice
const instructorSlice = createSlice({
  name: "instructors",
  initialState: [
    { id: 1, name: "Alexander" },
    { id: 2, name: "Lisa" },
    { id: 3, name: "Noah" },
    { id: 4, name: "Eliza" },
    { id: 5, name: "Agnes" },
    { id: 6, name: "Liv" },
  ] as Instructor[],
  reducers: {
    addInstructor: (state, action: PayloadAction<Instructor>) => {
      state.push(action.payload);
    },
  },
});

// 🔹 Event Slice (With Your Data in `initialState`)
const eventSlice = createSlice({
    name: "events",
    initialState: [
      {
        id: 1,
        title: "Springmusene",
        instructors: [
          { id: 1, name: "Alexander" },
          { id: 2, name: "Lisa" },
          { id: 3, name: "Noah" },
          { id: 4, name: "Eliza" },
          { id: 5, name: "Agnes" },
          { id: 6, name: "Liv" },
        ],
        type: "practice",
        description: "bob",
        date: new Date(),
        location: "Kildegården 9",
      },
      {
        id: 2,
        title: "Supernovaer",
        instructors: [
          { id: 1, name: "Alexander" },
          { id: 2, name: "Lisa" },
          { id: 3, name: "Noah" },
          { id: 4, name: "Eliza" },
          { id: 5, name: "Agnes" },
        ],
        type: "practice",
        description: "bob",
        date: new Date(),
        location: "Kildegården 9",
      },
      {
        id: 3,
        title: "Stjerneskud",
        instructors: [
          { id: 1, name: "Alexander" },
          { id: 2, name: "Lisa" },
          { id: 3, name: "Noah" },
          { id: 4, name: "Eliza" },
        ],
        type: "practice",
        description: "bob",
        date: new Date(),
        location: "Kildegården 9",
      },
      {
        id: 4,
        title: "Springmix",
        instructors: [
          { id: 1, name: "Alexander" },
          { id: 2, name: "Lisa" },
          { id: 3, name: "Noah" },
        ],
        type: "practice",
        description: "bob",
        date: new Date(),
        location: "Kildegården 9",
      },
      {
        id: 5,
        title: "Power Boys",
        instructors: [
          { id: 1, name: "Alexander" },
          { id: 2, name: "Lisa" },
        ],
        type: "practice",
        description: "bob",
        date: new Date(),
        location: "Kildegården 9",
      },
    ] as PlanningEvent[],
    reducers: {
      setEvents: (state, action: PayloadAction<PlanningEvent[]>) => {
        return action.payload;
      },
      addEvent: (state, action: PayloadAction<PlanningEvent>) => {
        state.push(action.payload);
      },
    },
  });
  
export const { addInstructor } = instructorSlice.actions;
export const { setEvents, addEvent } = eventSlice.actions;

// 🔹 Configure Store
export const store = configureStore({
  reducer: {
    instructors: instructorSlice.reducer,
    events: eventSlice.reducer,
  },
});

// 🔹 Setup TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
