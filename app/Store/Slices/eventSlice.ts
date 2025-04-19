// eventSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PlanningEvent } from "../../Types/index";
import { EventState } from "@/app/Types/stateTypes";
import { USE_MOCK_DATA } from "@/app/config";
import { mockEventData } from "../../data/MockData";

// Define your API URL for the backend
const API_URL = "https://localhost:7130/api/PlanningEvent";  // Replace this with your actual API URL

export const fetchEvents = createAsyncThunk<PlanningEvent[]>(
  "events/fetchEvents",
  async () => {
    if (USE_MOCK_DATA) {
      console.log("⚠️ Using mock data instead of API");
      return new Promise<PlanningEvent[]>((resolve) => {
        setTimeout(() => resolve(mockEventData), 300); // simulate network delay
      });
    } else {
      const response = await axios.get(API_URL);
      return response.data;
    }
  }
);

const initialState: EventState = {
  events: [],
  status: "idle", // You can track loading states like 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";  // Set loading state when fetching data
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";  // Set succeeded state after successful API call
        state.events = action.payload;  // Store fetched events in state
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";  // Set failed state if API call fails
        state.error = action.error.message ?? null;
      });
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
