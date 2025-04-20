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

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
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
      <h2>Events</h2>
      {events.map((event) => {
        const isEditing = editingId === event.id;
        const venue = venues[event.venueId];
        return (
          <div key={event.id} className="border-t py-4 flex gap-4 items-start">
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
                    <strong>Location:</strong> {venue?.address || "Unknown"}
                  </p>
                  <div>
                    <strong>Instructors:</strong>
                    <ul>
                      {event.instructorsId.map((id) => {
                        const instructor = instructors.find((i) => i.id === id);
                        return (
                          <li key={id}>
                            {instructor?.name || "Unknown Instructor"}
                          </li>
                        );
                      })}
                    </ul>
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
        );
      })}
    </div>
  );
};

export default Events;
