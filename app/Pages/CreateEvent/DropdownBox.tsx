"use client";

import React from "react";

interface OptionWithId {
  id: number;
  [key: string]: any;
}

interface DropdownBoxProps<T extends OptionWithId> {
  options: T[];
  labelkey: keyof T;
  onChange?: (selectedId: number | T) => void;
  returnObject?: boolean;
}

const DropdownBox = <T extends OptionWithId>({
  options,
  labelkey,
  onChange,
  returnObject = false,
}: DropdownBoxProps<T>) => {
  // Check if options is an array before attempting to map
  if (!Array.isArray(options)) {
    console.error("Options passed to DropdownBox are not an array:", options);
    return <div>Error: Invalid data passed to DropdownBox.</div>; // Return an error UI
  }

  return (
    <div className="flex flex-row items-center border-2 border-black space-x-2 min-w-32 h-12 p-2">
      <div className="w-8 h-8 bg-blue-900"></div>
      <div className="flex flex-col">
        <label>{labelkey.toLocaleString()}</label>
        <select
          defaultValue=""
          onChange={(e) => {
            const selectedValue = Number(e.target.value);
            const selectedItem = options.find(
              (item) => item.id === selectedValue
            );

            if (onChange && selectedItem) {
              onChange(returnObject ? selectedItem : selectedValue);
            }
          }}
        >
          <option value="" disabled>
            Vælg...
          </option>
          {options.map((item, index) => (
            <option value={(item as any).id} key={item.id}>
              {String(item[labelkey])}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownBox;
