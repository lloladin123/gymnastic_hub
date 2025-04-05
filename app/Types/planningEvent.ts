
export interface PlanningEvent {
  id: number;
  name: string;
  teamId: number;
  instructorsId: number[];
  categoryId: number;
  description: string;
  date: number;
  venueId: number;
}
