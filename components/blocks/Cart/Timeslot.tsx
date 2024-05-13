import React from "react";

export default function Timeslot() {
  // Dummy data for timeslots
  const timeSlots = [
    { time: "08:00", event: "Morgenmad" },
    { time: "10:00", event: "Møde" },
    { time: "12:00", event: "Frokost" },
    // Add more timeslots as needed
  ];

  return (
    <div className="mt-24 block md:flex">
      <div className="md:w-2/3">
        <div className="bg-blue-300 h-[350px]">
          <h1 className="text-center text-white text-2xl py-8">Dette er en timeslot din Slut</h1>
        </div>
      </div>
      <div className="md:w-1/3">
        <div className="bg-white border border-gray-200 rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Dagens Plan</h2>
          {timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">{slot.time}</p>
              <p className="text-sm">{slot.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
