"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import CalenderIcon from "../../Components/CalenderIcon";
import { fetchEvents } from "../../Store/Slices/eventSlice";
import Spinner from "@/app/Components/Spinner";

const Events: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const instructors = useSelector((state: RootState) => state.instructors);
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const events = useSelector((state: RootState) => state.events.events);
  const teams = useSelector((state: RootState) => state.teams.teams);
  const status = useSelector((state: RootState) => state.events.status);
  const error = useSelector((state: RootState) => state.events.error);

  const formatEventDate = (date: Date) =>
    `${date.getHours().toString().padStart(2, "0")}:` +
    `${date.getMinutes().toString().padStart(2, "0")}`;

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Month: March</h2>

      {/* 🔄 Loading Indicator */}
      {status === "loading" && (
        <div className="text-center text-gray-500 animate-pulse py-10">
          <Spinner show={status === "loading"} label="Loading events..." />
        </div>
      )}

      {/* ❌ Error message */}
      {status === "failed" && (
        <div className="text-center text-red-600 py-10">
          Failed to load events: {error}
        </div>
      )}

      {/* ✅ Events */}
      {status === "succeeded" &&
        events.map((event) => (
          <div key={event.id} className="flex items-center border-t-1 py-4">
            <CalenderIcon date={new Date(event.date)} />
            <div className="flex pl-2 w-full items-center justify-between">
              <div className="flex flex-col space-y-1">
                <p>
                  Team:{" "}
                  {teams.find((team) => team.id === event.teamId)?.name ??
                    "Unknown"}
                </p>
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
                    {formatEventDate(new Date(event.date))}
                  </Link>
                </div>
                <p>
                  Location:{" "}
                  {venues.find((venue) => venue.id === event.venueId)
                    ?.address ?? "Unknown"}
                </p>
              </div>
              <div>
                <h2 className="font-bold">Instructors</h2>
                <div className="flex flex-wrap flex-col items-start h-30 space-x-2">
                  {event.instructorsId.map((instructorId) => {
                    const instructor = instructors.instructors.find(
                      (i) => i.id === instructorId
                    );
                    return (
                      <p key={instructor?.id} className="h-10 min-w-max">
                        {instructor?.name || "Unknown Instructor"}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <Link href={`/Pages/ViewEvent/${event.id}`}>View details</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Events;
