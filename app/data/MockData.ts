import { id } from "date-fns/locale";
import { Instructor, PlanningEvent, Venue } from "../Types/index";
import { Team } from "../Types/team";
import { Member } from "../Types/member";

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
      title: "Springmusene træning",
      instructors: mockInstructorsData.slice(0,6),
      categoryId: 1,
      description: "bob",
      date: new Date(),
      venueId: 1,
    },
    {
      id: 2,
      title: "Supernovaer",
      instructors: mockInstructorsData.slice(0,5),
      categoryId: 1,
      description: "bob",
      date: new Date(),
      venueId: 1,
    },
    {
      id: 3,
      title: "Stjerneskud",
      instructors: mockInstructorsData.slice(0,4),
      categoryId: 1,
      description: "bob",
      date: new Date(),
      venueId: 1,
    },
    {
      id: 4,
      title: "Springmix",
      instructors: mockInstructorsData.slice(0,3),
      categoryId: 1,
      description: "bob",
      date: new Date(),
      venueId: 1,
    },
    {
      id: 5,
      title: "Power Boys",
      instructors: mockInstructorsData.slice(0,2),
      categoryId: 1,
      description: "bob",
      date: new Date(),
      venueId: 1,
    },
  ];