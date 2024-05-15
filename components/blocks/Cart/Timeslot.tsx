import BrownButton from "@/components/buttons/BrownButton";
import React from "react";

export default function Timeslot() {
  // Dummy data for timeslots
  const timeSlots = [
    { time: "08:00" },
    { time: "10:00" },
    { time: "12:00" },
    // Add more timeslots as needed
  ];

  return (
    <div className="block md:flex">
      <div className="md:w-auto">
        <div className="bg-darkBeige  border-gray-200 rounded-md p-4 ">
          <h2 className="text-lg font-semibold mb-2">Ledige tidspunkter</h2>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot, index) => (
              <div key={index} className="bg-mediumBeige p-2 rounded-md shadow-md hover:bg-lightBlue">
                <p className="text-sm font-medium">{slot.time}</p>
              </div>
            ))}
          </div>
          <div className="grid justify-center">
          <BrownButton></BrownButton>
          </div>
        </div>
      </div>
    </div>
  );
}
