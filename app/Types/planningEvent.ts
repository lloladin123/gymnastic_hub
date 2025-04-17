
export interface PlanningEvent {
  id: number;
  creatorId: number;
  name: string;
  teamId: number;
  instructorsId: number[];
  categoryId: number;
  description: string;
  date: number;
  venueId: number;
}
