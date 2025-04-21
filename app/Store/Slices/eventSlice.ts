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
      // 👇 Optional: also delay real API to simulate longer load time
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(API_URL);
      return response.data;
    }
  }
);

export const fetchEventById = createAsyncThunk<PlanningEvent, number>(
  "events/fetchById",
  async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

export const deleteEvent = createAsyncThunk<number, number>(
  "events/deleteEvent",
  async (id) => {
    if (USE_MOCK_DATA) {
      console.log(`⚠️ Mock delete for event ${id}`);
      return new Promise<number>((resolve) =>
        setTimeout(() => resolve(id), 300)
      );
    } else {
      await axios.delete(`${API_URL}/${id}`);
      return id; // Return the deleted ID so we can remove it from Redux state
    }
  }
);

export const updateEvent = createAsyncThunk<
  PlanningEvent, // return type
  { id: number; updatedEvent: Partial<PlanningEvent> } // input
>(
  "events/updateEvent",
  async ({ id, updatedEvent }) => {
    if (USE_MOCK_DATA) {
      console.log(`⚠️ Mock updating event ${id}`);
      return new Promise<PlanningEvent>((resolve) =>
        setTimeout(() => resolve({ id, ...updatedEvent } as PlanningEvent), 300)
      );
    } else {
      const response = await axios.put(`${API_URL}/${id}`, {
        id,
        ...updatedEvent,
        date: new Date(updatedEvent.date!).toISOString(), // convert timestamp to ISO string
      });
      return response.data;
    }
  }
);


type PlanningEventDTO = Omit<PlanningEvent, "date"> & { date: string };

export const createEvent = createAsyncThunk<
  PlanningEvent,         // return type (comes back as normal PlanningEvent)
  PlanningEvent          // input type (your UI still uses timestamps)
>(
  "events/createEvent",
  async (newEvent) => {
    const formattedEvent: PlanningEventDTO = {
      ...newEvent,
      date: new Date(newEvent.date).toISOString(), // format for backend
    };

    if (USE_MOCK_DATA) {
      console.log("⚠️ Mock mode: Simulating event creation");
      return new Promise<PlanningEvent>((resolve) => {
        setTimeout(() => resolve({ ...newEvent, id: Date.now() }), 300); // use original timestamp for mock
      });
    } else {
      const response = await axios.post(API_URL, formattedEvent);
      return response.data;
    }
  }
);

const initialState: EventState = {
  events: [],
  status: "idle", // You can track loading states like 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  selectedEvent: null
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
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.selectedEvent = action.payload; // ✅ no error now
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter((event) => event.id !== action.payload);
        if (state.selectedEvent?.id === action.payload) {
          state.selectedEvent = null;
        }
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        // Update event in list
        const index = state.events.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        // Also update selected event if we're viewing it
        if (state.selectedEvent?.id === action.payload.id) {
          state.selectedEvent = action.payload;
        }
      });
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
