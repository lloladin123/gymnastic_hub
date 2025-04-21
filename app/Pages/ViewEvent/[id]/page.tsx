"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/Store/Store";
import { deleteEvent, fetchEventById } from "@/app/Store/Slices/eventSlice";
import Link from "next/link";
import Spinner from "@/app/Components/Spinner";
import ConfirmModal from "@/app/Components/ConfirmModual";
import DatePickerInput from "@/app/Components/DatePickerInput";
import { PlanningEvent } from "@/app/Types/planningEvent";

const EventDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const event = useSelector((state: RootState) => state.events.selectedEvent);
  const status = useSelector((state: RootState) => state.events.status);
  const teams = useSelector((state: RootState) => state.teams.teams);
  const venues = useSelector((state: RootState) => state.venues);
  const instructors = useSelector(
    (state: RootState) => state.instructors.instructors
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchEventById(Number(id)));
    }
  }, [dispatch, id]);

  const [editableEvent, setEditableEvent] = useState<PlanningEvent | null>(
    null
  );

  useEffect(() => {
    if (event) {
      setEditableEvent({ ...event });
    }
  }, [event]);

  if (status === "loading" || !event) {
    return (
      <div className="p-10 text-gray-600">
        <Spinner show={status === "loading"} label="Loading events..." />
      </div>
    );
  }

  const updateEventField = (key: keyof PlanningEvent, value: any) => {
    setEditableEvent((prev) => {
      if (!prev) return prev; // Just in case
      return { ...prev, [key]: value } as PlanningEvent;
    });
  };

  const handleDelete = () => {
    if (!event?.id) return;
    dispatch(deleteEvent(event.id));
    // Optional: redirect to list page after
  };

  return (
    <div className="border-solid border-2 m-4 p-4 ">
      <div className="flex flex-row items-left space-x-4">
        <div className="bg-blue-900 w-3/12 h-64"></div>
        <div className="flex flex-col p-2 space-y-1">
          <h2 className="text-xl font-semibold">Information</h2>
          <p>
            Team:{" "}
            {teams.find((team) => team.id === event.teamId)?.name ?? "Unknown"}
          </p>
          <p>
            Venue:{" "}
            {venues.find((v) => v.id === event.venueId)?.address ?? "Unknown"}
          </p>
          {editableEvent && (
            <DatePickerInput
              selected={new Date(editableEvent.date)}
              onDateChange={(date) =>
                updateEventField("date", date?.getTime() ?? editableEvent.date)
              }
            />
          )}

          <p>Description: {event.description}</p>
        </div>
        <div className="flex flex-col p-2 space-y-1">
          <h2 className="text-xl font-semibold">Instructors</h2>
          <ul>
            {event.instructorsId.map((id) => {
              const instructor = instructors.find((i) => i.id === id);
              return (
                <li key={id}>{instructor?.name ?? `Instructor ID: ${id}`}</li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-2 flex flex-row space-x-2">
        <Link className="p-2 rounded-xl bg-orange-400 text-white" href="">
          Edit
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            setShowDeleteModal(true);
          }}
          className="p-2 rounded-xl bg-red-800 text-white"
          href=""
        >
          Delete
        </Link>
        <ConfirmModal
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      </div>
    </div>
  );
};

export default EventDetailsPage;
