"use client";
import React, { useState } from "react";
import DropdownBox from "./DropdownBox";
import { useDispatch, useSelector } from "react-redux";
import DatePickerInput from "@/app/Components/Calender";
import Link from "next/link";
import { PlanningEvent } from "../../Types/index";
import InstructorList from "./InstructorList";
import { AppDispatch, RootState } from "../../Store/Store";
import { addEvent, createEvent } from "@/app/Store/Slices/eventSlice";
import { createEmptyEvent } from "@/app/Utils/Helpers/eventHelpers";

const page: React.FC = () => {
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const teams = useSelector((state: RootState) => state.teams.teams);

  const [event, setEvent] = useState<PlanningEvent>(createEmptyEvent());
  const updateEventField = (key: keyof PlanningEvent, value: any) => {
    setEvent((prev) => {
      const updated = { ...prev, [key]: value };
      console.log("Updated event:", updated);
      console.log(key + " was update to " + value);
      return updated;
    });
  };

  const dispatch: AppDispatch = useDispatch();
  const selectedTeam = teams.find((team) => team.id === event.teamId);

  // Function to dispatch the dummy event
  const handleAddEvent = () => {
    dispatch(createEvent(event)); // ✅ Posts to API and updates store on success
    // Dispatch the addEvent action with the dummy event
    console.log("Dummy event added:", event); // Optionally log it
  };

  // Handle date changes from DatePicker
  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Update the event's date field with the selected date (convert to timestamp)
      updateEventField("date", date.getTime());
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 h-128 border-2 border-black mt-4 p-4">
        <div className="flex flex-col items-center">
          <h2>Plan your event</h2>
          <div className="flex flex-row space-x-1"></div>
          <InstructorList
            onChange={(instructorIds) =>
              updateEventField("instructorsId", instructorIds)
            }
            selectedIds={selectedTeam?.instructorsId}
          />

          <div className="mt-2 flex flex-row items-center justify-center space-x-2 p-2">
            <DropdownBox
              labelkey="type"
              options={eventCategories}
              onChange={(id) => updateEventField("categoryId", id)}
            ></DropdownBox>
            <DropdownBox
              labelkey="name"
              options={venues}
              onChange={(id) => updateEventField("venueId", id)}
            ></DropdownBox>
            <DropdownBox
              labelkey="name"
              options={teams}
              returnObject // 👈 now this will return the full object
              onChange={(team) => {
                if (typeof team !== "number") {
                  updateEventField("teamId", team.id);
                  updateEventField("instructorsId", team.instructorsId); // optional: auto-fill instructors
                }
              }}
            />
            <DatePickerInput onDateChange={handleDateChange} />
          </div>
          <textarea
            className="w-full h-40 p-3 border rounded-lg"
            placeholder="Event description"
            value={event.description} // Bind textarea value to event description
            onChange={(e) => updateEventField("description", e.target.value)} // Update the event description
          ></textarea>
        </div>
        <Link
          onClick={handleAddEvent}
          className="p-2 text-white bg-gray-800 rounded-lg"
          href="#"
        >
          Add event
        </Link>
      </div>
    </div>
  );
};

export default page;
