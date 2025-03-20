"use client";
import React from "react";
import DropdownBox from "./DropdownBox";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

interface eventType {
  id: number;
  type: string;
}

const page: React.FC = () => {
  const eventCategories = useSelector(
    (state: RootState) => state.eventCategories
  );
  const venues = useSelector((state: RootState) => state.venues);
  const instructors = useSelector((state: RootState) => state.instructors);
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 h-128 border-2 border-black mt-4 p-4">
        <div className="flex flex-col items-center">
          <h2>Plan your event</h2>
          <div className="mt-2 flex flex-row items-center justify-center p-2">
            <DropdownBox
              labelkey="type"
              options={eventCategories}
            ></DropdownBox>
            <DropdownBox labelkey="name" options={venues}></DropdownBox>
            <DropdownBox labelkey="name" options={instructors}></DropdownBox>
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
