import { Instructor } from "./instructorTypes";

export interface PlanningEvent {
  id: number;
  title: string;
  instructors: Instructor[];
  categoryId: number;
  description: string;
  date: Date;
  venueId: number;
}
