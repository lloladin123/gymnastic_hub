import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanningEvent, Instructor } from "../../Types/index";

const initialState: PlanningEvent[] = [];

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
    initializeEvents: (state, action: PayloadAction<Instructor[]>) => {
      const instructors = action.payload;

      return [
        {
          id: 1,
          title: "Springmusene",
          instructors: instructors.slice(0, 6),
          type: "practice",
          description: "bob",
          date: new Date(),
          location: "Kildegården 9",
        },
        {
          id: 2,
          title: "Supernovaer",
          instructors: instructors.slice(0, 5),
          type: "practice",
          description: "bob",
          date: new Date(),
          location: "Kildegården 9",
        },
        {
          id: 3,
          title: "Stjerneskud",
          instructors: instructors.slice(0, 4),
          type: "practice",
          description: "bob",
          date: new Date(),
          location: "Kildegården 9",
        },
        {
          id: 4,
          title: "Springmix",
          instructors: instructors.slice(0, 3),
          type: "practice",
          description: "bob",
          date: new Date(),
          location: "Kildegården 9",
        },
        {
          id: 5,
          title: "Power Boys",
          instructors: instructors.slice(0, 2),
          type: "practice",
          description: "bob",
          date: new Date(),
          location: "Kildegården 9",
        },
      ];
    },
  },
});

export const { setEvents, addEvent, initializeEvents } = eventSlice.actions;
export default eventSlice.reducer;
