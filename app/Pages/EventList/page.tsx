"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import CalenderIcon from "../../Components/CalenderIcon";
import { deleteEvent, updateEvent } from "@/app/Store/Slices/eventSlice";
import { PlanningEvent } from "@/app/Types/index";

const Events: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);
  const instructors = useSelector(
    (state: RootState) => state.instructors.instructors
  );
  const venues = useSelector((state: RootState) => state.venues);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedEvent, setEditedEvent] = useState<Partial<PlanningEvent>>({});
  const teams = useSelector((state: RootState) => state.teams.teams);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const formatEventDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleEditClick = (event: PlanningEvent) => {
    setEditingId(event.id);
    setEditedEvent({ ...event });
  };

  const handleSave = () => {
    if (editingId && editedEvent) {
      dispatch(updateEvent({ id: editingId, updatedEvent: editedEvent }));
      setEditingId(null);
      setEditedEvent({});
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <h2 className="text-xl font-semibold mb-2">Month: March</h2>

      {events.map((event) => {
        const isEditing = editingId === event.id;
        const venueObj = venues.find((v) => v.id === event.venueId);
        const team = teams.find((team) => team.id === event.teamId);

        return (
          <div
            key={event.id}
            className="border-t py-4 flex flex-col gap-4 items-start"
          >
            <div className="flex items-start gap-4 w-full">
              <CalenderIcon date={new Date(event.date)} />

              <div className="flex flex-col w-full space-y-2">
                {isEditing ? (
                  <>
                    <input
                      value={editedEvent.name || ""}
                      onChange={(e) =>
                        setEditedEvent({ ...editedEvent, name: e.target.value })
                      }
                      className="border p-1"
                    />
                    <input
                      type="datetime-local"
                      onChange={(e) =>
                        setEditedEvent({
                          ...editedEvent,
                          date: new Date(e.target.value).getTime(),
                        })
                      }
                      className="border p-1"
                    />
                    <input
                      type="number"
                      value={editedEvent.venueId || ""}
                      onChange={(e) =>
                        setEditedEvent({
                          ...editedEvent,
                          venueId: parseInt(e.target.value),
                        })
                      }
                      className="border p-1"
                      placeholder="Venue ID"
                    />
                    <input
                      type="text"
                      value={(editedEvent.instructorsId || []).join(",")}
                      onChange={(e) =>
                        setEditedEvent({
                          ...editedEvent,
                          instructorsId: e.target.value
                            .split(",")
                            .map((id) => parseInt(id.trim())),
                        })
                      }
                      className="border p-1"
                      placeholder="Instructors (comma-separated IDs)"
                    />
                    <button
                      className="bg-green-700 text-white p-2 rounded"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Team:</strong> {event.name}
                    </p>
                    <p>
                      <strong>Time:</strong> {formatTime(event.date)}
                    </p>
                    <p>
                      <strong>Location:</strong>{" "}
                      {venueObj?.address || "Unknown"}
                    </p>
                    <div>
                      <strong>Instructors:</strong>
                      <ul>
                        {event.instructorsId.map((id) => {
                          const instructor = instructors.find(
                            (i) => i.id === id
                          );
                          return (
                            <li key={id}>
                              {instructor?.name || "Unknown Instructor"}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <p>
                      <strong>Team Name:</strong> {team?.name ?? "Unknown"}
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
                  </>
                )}
                <div className="flex space-x-2">
                  {!isEditing && (
                    <button
                      className="bg-blue-700 text-white px-3 py-1 rounded"
                      onClick={() => handleEditClick(event)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
