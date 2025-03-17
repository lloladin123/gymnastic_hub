import React from "react";

interface eventType {
  id: number;
  type: string;
}

interface eventValues {
  type: string;
}

const eventTypes: eventType[] = [
  { id: 1, type: "Practice" },
  { id: 2, type: "Event" },
  { id: 3, type: "Show" },
];

const page: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 h-128 border-2 border-black mt-4 p-4">
        <div className="flex flex-col items-center">
          <h2>Plan your event</h2>
          <div className="mt-2 flex flex-row items-center justify-center p-2">
            <div className="flex flex-row items-center border-2 border-black space-x-2 min-w-32 h-12 p-2">
              <div className="w-8 h-8 bg-blue-900"></div>
              <div className="flex flex-col">
                <label>Type</label>
                <select>
                  {eventTypes.map(({ id, type }) => (
                    <option key={id}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
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
