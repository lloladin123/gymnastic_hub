"use client";

import Link from "next/link";
import React from "react";

interface TimeBoxProps {
  date: number | string | Date;
}

const TimeBox: React.FC<TimeBoxProps> = ({ date }) => {
  const parsedDate = new Date(date);
  const formatEventDate = (d: Date) =>
    `${d.getHours().toString().padStart(2, "0")}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

  return (
    <Link
      className="bg-gray-800 text-center text-white py-2 px-4 rounded-md"
      href="#"
    >
      {formatEventDate(parsedDate)}
    </Link>
  );
};

export default TimeBox;
