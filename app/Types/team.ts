import { Instructor } from "./instructorTypes";
import { Member } from "./member";
import { Venue } from "./venue";

export interface Team {
    id: number;
    instructors: Instructor[];
    Members: Member[];
    venue: Venue;
}