"use client";
import React, { useRef, useState } from "react";
import DropdownBox from "./DropdownBox";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import DatePickerInput from "@/app/Components/Calender";
import Link from "next/link";
import { Instructor } from "../../Types/index";

const page: React.FC = () => {
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const instructors = useSelector((state: RootState) => state.instructors);
  const [render, setRender] = useState(false);
  const [selectedInstructorId, setSelectedInstructorId] = useState<
    number | null
  >(instructors.length > 0 ? instructors[0].id : null);

  const eventInstructors = useRef<Instructor[]>([]);

  const addInstructorToEvent = () => {
    // console.log("Button Clicked");

    if (selectedInstructorId === null) {
      // console.log("No instructor selected");
      return;
    }

    // console.log("Selected Instructor ID:", selectedInstructorId);

    const selectedInstructor = instructors.find(
      (inst) => inst.id === selectedInstructorId
    );

    if (!selectedInstructor) {
      // console.log("Instructor not found in the list.");
      return;
    }

    if (!eventInstructors.current.includes(selectedInstructor)) {
      eventInstructors.current.push(selectedInstructor); // Add to persistent list
      // console.log("Event Instructors Array:", eventInstructors.current); // Logs the current array
      setRender(!render); // Force re-render to reflect the new list
    }
  };
  const removeInstructorFromEvent = (id: number) => {
    eventInstructors.current = eventInstructors.current.filter(
      (instructor) => instructor.id !== id
    );
    setRender(!render);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 h-128 border-2 border-black mt-4 p-4">
        <div className="flex flex-col items-center">
          <h2>Plan your event</h2>
          <div className="flex flex-row space-x-1">
            <DropdownBox
              labelkey="name"
              options={instructors}
              onChange={(id: number) => setSelectedInstructorId(id)}
            ></DropdownBox>
            <Link
              className="p-2 text-white bg-gray-800 rounded-lg flex items-center justify-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                addInstructorToEvent();
              }}
            >
              Add Instructor
            </Link>
          </div>
          <div className="flex flex-row space-x-1">
            {eventInstructors.current.map((item, index) => (
              <div
                className="p-2 mt-2  relative text-white bg-green-900 rounded-lg"
                key={item.id}
              >
                <Link
                  className="absolute -top-1 right-0 text-red-500 text-lg"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    removeInstructorFromEvent(item.id);
                  }}
                >
                  X
                </Link>
                {item.name}
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-row items-center justify-center space-x-2 p-2">
            <DropdownBox
              labelkey="type"
              options={eventCategories}
            ></DropdownBox>
            <DropdownBox labelkey="name" options={venues}></DropdownBox>
            <DatePickerInput />
            <Link className="p-2 text-white bg-gray-800 rounded-lg" href="#">
              Add event
            </Link>
          </div>
          <textarea
            className="w-full h-40 p-3 border rounded-lg"
            placeholder="Event description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default page;
