import React from "react";
import { FaRegCalendar } from "react-icons/fa";

const CalenderIcon = ({ date }: { date: Date }) => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <FaRegCalendar className="w-full h-full" />
      <p className="absolute text-black text-6xl mt-7 font-bold">
        {date.getDate()}
      </p>
    </div>
  );
};

export default CalenderIcon;
