import { Instructor } from "./instructorTypes";
import { PlanningEvent } from "./planningEvent";
import { Team } from "./team";

export interface InstructorState {
    instructors: Instructor[];
}

export interface TeamState {
    teams: Team[];
}

export interface EventState {
    events: PlanningEvent[]; // List of events
    status: 'idle' | 'loading' | 'succeeded' | 'failed'; // Status of the API request
    error: string | null; // To store any error message in case of failure
    selectedEvent: PlanningEvent | null;
  }
  