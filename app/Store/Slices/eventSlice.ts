import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanningEvent } from "../../Types/index";
import { EventState } from "@/app/Types/stateTypes";

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<PlanningEvent[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<PlanningEvent>) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
    updateEvent: (
      state,
      action: PayloadAction<{
        id: number;
        updatedEvent: Partial<PlanningEvent>;
      }>
    ) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.findIndex((event) => event.id === id);

      if (index !== -1) {
        // Perform a shallow merge, where we update only the fields that are provided in updatedEvent
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
  },
});

export const { setEvents, addEvent, deleteEvent, updateEvent } =
  eventSlice.actions;
export default eventSlice.reducer;
