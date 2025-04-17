"use client";
import React, { useRef, useState } from "react";
import DropdownBox from "./DropdownBox";
import { useDispatch, useSelector } from "react-redux";
import DatePickerInput from "@/app/Components/Calender";
import Link from "next/link";
import { Instructor, PlanningEvent } from "../../Types/index";
import InstructorList from "./InstructorList";
import { RootState } from "../../Store/Store";
import { addEvent } from "@/app/Store/Slices/eventSlice";

const page: React.FC = () => {
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const teams = useSelector((state: RootState) => state.teams.teams);

  const dispatch = useDispatch(); // Initialize dispatch
  let currentEventId = 100;

  // Dummy event data for quick testing
  const dummyEvent: PlanningEvent = {
    id: currentEventId++, // Generate a unique ID (use a better method in production)
    creatorId: 1,
    name: "Dummy Event", // Event name
    teamId: 1, // Dummy team ID
    instructorsId: [1, 2], // Dummy instructor IDs
    categoryId: 1, // Dummy category ID
    description: "This is a dummy event created for testing purposes.", // Event description
    venueId: 1, // Dummy venue ID
    date: new Date().getTime(),
  };

  // Function to dispatch the dummy event
  const handleAddEvent = () => {
    dispatch(addEvent(dummyEvent)); // Dispatch the addEvent action with the dummy event
    console.log("Dummy event added:", dummyEvent); // Optionally log it
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 h-128 border-2 border-black mt-4 p-4">
        <div className="flex flex-col items-center">
          <h2>Plan your event</h2>
          <div className="flex flex-row space-x-1"></div>
          <InstructorList />
          <div className="mt-2 flex flex-row items-center justify-center space-x-2 p-2">
            <DropdownBox
              labelkey="type"
              options={eventCategories}
            ></DropdownBox>
            <DropdownBox labelkey="name" options={venues}></DropdownBox>
            <DropdownBox labelkey="name" options={teams}></DropdownBox>
            <DatePickerInput />
          </div>
          <textarea
            className="w-full h-40 p-3 border rounded-lg"
            placeholder="Event description"
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
