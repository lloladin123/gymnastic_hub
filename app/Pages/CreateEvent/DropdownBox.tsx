"use client";

import React from "react";

interface OptionWithId {
  id: number;
}

interface DropdownBoxProps<T extends OptionWithId> {
  options: T[];
  labelkey: keyof T;
  onChange?: (selectedId: number) => void;
}

const DropdownBox = <T extends OptionWithId>({
  options,
  labelkey,
  onChange,
}: DropdownBoxProps<T>) => {
  return (
    <div className="flex flex-row items-center border-2 border-black space-x-2 min-w-32 h-12 p-2">
      <div className="w-8 h-8 bg-blue-900"></div>
      <div className="flex flex-col">
        <label>{labelkey.toLocaleString()}</label>
        <select
          onChange={(e) => {
            const selectedValue = Number(e.target.value);
            if (onChange && !isNaN(selectedValue)) onChange(selectedValue);
          }}
        >
          {options.map((item, index) => (
            <option value={(item as any).id} key={index}>
              {String(item[labelkey])}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownBox;
