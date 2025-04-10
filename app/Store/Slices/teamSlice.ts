import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "@/app/Types/team";
import { TeamState } from "@/app/Types/stateTypes";
import { mockTeamData } from "../../data/MockData/index";

// ✅ The state must be named `initialState`
const initialState: TeamState = {
  teams: mockTeamData,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState, // ✅ Corrected initialState name
  reducers: {
    setTeamType: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload;  // ✅ Correctly modifying the state
    },
    addTeamType: (state, action: PayloadAction<Team>) => {
      state.teams.push(action.payload);  // ✅ Correctly pushing to the array within the state
    },
  },
});

export const { setTeamType, addTeamType } = teamsSlice.actions;
export default teamsSlice.reducer;
