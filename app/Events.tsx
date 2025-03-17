"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Instructor, PlanningEvent } from "./Types/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Store/Store";

const Events: React.FC = () => {
  const instructors = useSelector((state: RootState) => state.instructors);
  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      {/* Event container */}
      {events.map((event) => (
        <div key={event.id} className="flex items-center border-t-1 py-4">
          <Image
            width={150}
            height={150}
            alt=""
            src="https://via.placeholder.com/150"
          ></Image>
          {/* Text container for event */}
          <div className="flex pl-2 w-full items-center justify-between">
            <div className="flex flex-col space-y-1">
              <p>{event.title}</p>
              <Link
                className="bg-gray-800 text-center text-white py-2 px-4 rounded-md"
                href=""
              >
                Absent
              </Link>
            </div>
            <div className="flex flex-wrap flex-col items-start h-30 space-x-2">
              {event.instructors.map((instructor) => (
                <p key={instructor.id} className="h-10 min-w-max">
                  {instructor.name}
                </p>
              ))}
            </div>

            <div>
              <Link href="/CreateEvent">View details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
