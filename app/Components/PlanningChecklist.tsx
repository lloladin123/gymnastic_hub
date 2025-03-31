"use client";

import React, { useState } from "react";
import { CheckListItem } from "../types";

const initialCheckList: CheckListItem[] = [
  { id: 1, text: "send email", checked: false },
  { id: 2, text: "Talk to kid x", checked: false },
  { id: 3, text: "Ask for help", checked: false },
  { id: 4, text: "send email", checked: false },
  { id: 5, text: "send email", checked: false },
];

const PlanningChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState(initialCheckList);

  const toggleCheck = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  return (
    <div className="p-10">
      <h2 className="text-xl">Weekly plan checklist</h2>
      <ul className="flex space-x-4">
        {checklist.map((item) => (
          <li key={item.id} className="flex items-center space-x-1">
            <input
              onChange={() => toggleCheck(item.id)}
              checked={item.checked}
              type="checkbox"
            ></input>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanningChecklist;
