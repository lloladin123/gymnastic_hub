import { Team } from "@/app/Types/team";
import { mockInstructorsData, mockInstructorsId } from "./index";
import { mockMemberData } from "./index";
import { mockVenueData } from "./index";

export const mockTeamData: Team[] = [
    {id: 1, name: "Springmusene", instructorsId: mockInstructorsId, Members: mockMemberData, venue: mockVenueData[0]},
    {id: 2, name: "Supernovear", instructorsId: [...mockInstructorsId.slice(0,2)], Members: mockMemberData, venue: mockVenueData[0]},
    {id: 3, name: "Stjerneskud", instructorsId: [...mockInstructorsId.slice(1,3)], Members: mockMemberData, venue: mockVenueData[0]},
    {id: 4, name: "Springmix", instructorsId: [...mockInstructorsId.slice(2,4)], Members: mockMemberData, venue: mockVenueData[0]},
    {id: 5, name: "Power Boys", instructorsId: [...mockInstructorsId.slice(3,5)], Members: mockMemberData, venue: mockVenueData[0]},
    {id: 6, name: "Power Girls", instructorsId: [...mockInstructorsId.slice(4,6)], Members: mockMemberData, venue: mockVenueData[0]},
    {id: 7, name: "Rg Spring", instructorsId: [...mockInstructorsId.splice(1,5)], Members: mockMemberData, venue: mockVenueData[0]},
]
