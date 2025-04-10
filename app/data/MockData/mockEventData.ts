import { PlanningEvent } from "../../Types/index";

export const mockEventData: PlanningEvent[] = [
    {
      id: 1,
      name: "Springmusene træning",
      instructorsId: [1, 2, 3, 4, 5, 6], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 2,
      name: "Supernovaer",
      instructorsId: [1, 2, 3, 4, 5], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 3,
      name: "Stjerneskud",
      instructorsId: [1, 2, 3, 4], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 4,
      name: "Springmix",
      instructorsId: [1, 2, 3], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
    {
      id: 5,
      name: "Power Boys",
      instructorsId: [1, 2], // Use instructor IDs
      categoryId: 1,
      description: "bob",
      teamId: 1,
      venueId: 1,
      date: new Date().getTime(),
    },
  ];