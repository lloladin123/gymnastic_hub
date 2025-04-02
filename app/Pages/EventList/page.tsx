"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import CalenderIcon from "../../Components/CalenderIcon";

const Events: React.FC = () => {
  const instructors = useSelector((state: RootState) => state.instructors);
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const events = useSelector((state: RootState) => state.events.events);
  const formatEventDate = (date: Date) =>
    `${date.getHours().toString().padStart(2, "0")}:` +
    `${date.getMinutes().toString().padStart(2, "0")}`;
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      <h2>Month: March</h2>
      {/* Event container */}
      {events.map((event) => (
        <div key={event.id} className="flex items-center border-t-1 py-4">
          <CalenderIcon date={event.date} />
          {/* Text container for event */}
          <div className="flex pl-2 w-full items-center justify-between">
            <div className="flex flex-col space-y-1">
              <p>Team: {event.title}</p>
              <div className="flex flex-row space-x-1 items-center">
                <Link
                  className="bg-red-900 text-center text-white py-2 px-4 rounded-md"
                  href=""
                >
                  Absent
                </Link>
                <Link
                  className="bg-gray-800 text-center text-white py-2 px-4 rounded-md"
                  href="#"
                >
                  {formatEventDate(event.date)}
                </Link>
              </div>
              <p>Location: {venues[event.venueId].address}</p>
            </div>
            <div>
              <h2 className="font-bold">Instructors</h2>
              <div className="flex flex-wrap flex-col items-start h-30 space-x-2">
                {event.instructors.map((instructor) => (
                  <p key={instructor.id} className="h-10 min-w-max">
                    {instructor.name}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Link href="#">View details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
