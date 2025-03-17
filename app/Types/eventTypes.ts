import { Instructor } from "./instructorTypes";

export interface PlanningEvent {
  id: number;
  title: string;
  instructors: Instructor[];
  type: string;
  description: string;
  date: Date;
  location: string;
}
