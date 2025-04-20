import { Instructor } from "./instructorTypes";
import { Member } from "./member";
import { Venue } from "./venue";

export interface Team {
    id: number;
    name: string;
    instructorsId: number[];
    Members: Member[];
    venue: Venue;
}