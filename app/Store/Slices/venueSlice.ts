import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Venue } from "../../Types/index";

const initialState: Venue[] = [
    {id: 1, name: "venue1", address: "address1"},
    {id: 2, name: "venue2", address: "address2"},
    {id: 3, name: "venue3", address: "address3"}
];

const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    setVenue: (state, action: PayloadAction<Venue[]>) => {
      return action.payload;
    },
    addVenue: (state, action: PayloadAction<Venue>) => {
      state.push(action.payload);
    },
  },
});

export const { setVenue, addVenue } = venueSlice.actions;
export default venueSlice.reducer;
