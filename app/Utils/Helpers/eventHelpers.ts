import { PlanningEvent } from "../../Types/index";

export const createEmptyEvent = (): PlanningEvent => ({
  id: 0,
  name: "",
  teamId: 0,
  instructorsId: [],
  categoryId: 0,
  description: "",
  venueId: 0,
  date: Date.now(),
  creatorId: 0,
});
