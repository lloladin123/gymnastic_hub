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
    events: PlanningEvent[];
}
  