import React, { useState } from "react";

const Timeslot = ({ availableSlots, setChosenTime, closeCalendar }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showCalendar, setShowCalendar] = useState(true);

  const formatTime = (timeString) => {
    try {
      console.log("tider fundet", timeString); // Fejlfindingsmeddelelse
      const [timePart] = timeString.split("+");
      const [hours, minutes] = timePart.split(":");
      if (!hours || !minutes) {
        console.error("Tidspunktet har ikke forventet time- eller minuttal:", timePart);
        return timeString;
      }
      return `${hours}:${minutes}`;
    } catch (error) {
      console.error("Fejl ved formatering af tid:", error);
      return timeString;
    }
  };


  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
    setChosenTime(slot); // Opdater valgt tidspunkt
  };


  return (
    <div className="block md:flex">
      <div className="md:w-auto">
        <div className="bg-primaryPurple border-gray-200 rounded-md p-4 ">
          <h3 className="text-h3M md:text-h3D font-semibold mb-2 text-primaryLight">Ledige tidspunkter</h3>
          <div className="grid grid-cols-3 gap-4">
            {availableSlots.map((slot, index) => (
             <div
             key={index}
             className={` p-2 rounded-md shadow-md cursor-pointer ${selectedSlot === slot ? 'bg-darkBlue text-lightBeige' : 'bg-lightBeige'}`}
             onClick={() => handleSlotSelection(slot)}
           >
                 <p className="text-p font-medium">{formatTime(slot.time)}</p>
              </div>
            ))}
          </div>
          <div className="grid justify-center text-lightBeige pt-3">
            <button onClick={closeCalendar}> Bekræft</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeslot;
