import { id } from "date-fns/locale";
import { Instructor, PlanningEvent, Venue } from "../../Types/index";
import { Team } from "../../Types/team";
import { Member } from "../../Types/member";

export const mockInstructorsData: Instructor[] = [
  { id: 1, name: "Alexander", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 2, name: "Lisa", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 3, name: "Noah", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 4, name: "Eliza", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 5, name: "Agnes", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
  { id: 6, name: "Liv", email: "email@bob.dk", address: "address1", phone: 22949292, type: "Instructor" },
];

export const mockMemberData: Member[] = [
    {id: 1, address: "addres1", email: "email1", name: "bob", phone: 94949494, type: "Member"}
]

export const mockVenueData: Venue[] = [
    {id: 1, address: "Kildegården 9", name: "kildegårdshallen"}
]

export const mockTeamData: Team[] = [
    {id: 1, name: "Springmusene", instructors: mockInstructorsData, Members: mockMemberData, venue: mockVenueData[0],}
]

export const mockEventData: PlanningEvent[] = [
    {
      id: 1,
      name: "Springmusene træning",
      instructorsId: [1, 2, 3, 4, 5, 6], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 2,
      name: "Supernovaer",
      instructorsId: [1, 2, 3, 4, 5], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 3,
      name: "Stjerneskud",
      instructorsId: [1, 2, 3, 4], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 4,
      name: "Springmix",
      instructorsId: [1, 2, 3], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 5,
      name: "Power Boys",
      instructorsId: [1, 2], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
  ];