"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  label?: string;
  onDateChange?: (date: Date | null) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  onDateChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setStartDate(date); // Keep the full Date object with both date and time
    if (onDateChange) onDateChange(date); // Pass the full Date object to the parent
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="DD/MM/YYYY HH:mm:"
        showTimeSelect
        placeholderText="Select a date"
        isClearable
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        className="border border-gray-300 rounded-lg p-2 text-gray-700 w-72"
      />
    </div>
  );
};

export default DatePickerInput;
