import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanningEvent } from "../../Types/index";
import { mockEventData } from "@/app/data/MockData/index";
import { EventState } from "@/app/Types/stateTypes";

const initialState: EventState = {
  events: mockEventData,
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
  },
});

export const { setEvents, addEvent } = eventSlice.actions;
export default eventSlice.reducer;
