"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  label?: string;
  selected?: Date;
  onDateChange?: (date: Date | null) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  selected,
  onDateChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(selected ?? null);

  // Sync with selected when it changes externally
  useEffect(() => {
    setStartDate(selected ?? null);
  }, [selected]);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    if (onDateChange) onDateChange(date);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy HH:mm"
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
