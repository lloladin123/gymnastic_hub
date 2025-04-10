import { Team } from "@/app/Types/team";
import { mockInstructorsData } from "./index";
import { mockMemberData } from "./index";
import { mockVenueData } from "./index";

export const mockTeamData: Team[] = [
    {id: 1, name: "Springmusene", instructors: mockInstructorsData, Members: mockMemberData, venue: mockVenueData[0],}
]
