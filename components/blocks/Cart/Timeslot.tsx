import React, { useState, useEffect } from "react";
import supabase from "@/app/config/supabaseClient";
import BrownButton from "@/components/buttons/BrownButton";
import PurpleButton from "@/components/buttons/PurpleButton";

const Timeslot = ({ availableSlots, ...props }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const formatTime = (timeString: string) => {
    try {
      console.log("tid valgt", timeString); // Fejlfindingsmeddelelse
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
    console.log(selectedSlot)
    setSelectedSlot(slot === selectedSlot ? null : slot);
    let dateClass = "bg-gray-500"
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
                 className={`bg-mediumBeige p-2 rounded-md shadow-md cursor-pointer dateclass ${
                   selectedSlot === slot ? 'bg-darkBlue' : ''
                 }`}
                 onClick={() => props.setChosenTime(slot)}
               > <p className="text-p font-medium">{formatTime(slot.time)}</p>
              </div>
            ))}
          </div>
          <div className="grid justify-center">
            <PurpleButton text="Book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeslot;

// const [timeSlots, setTimeSlots] = useState([]);

  // useEffect(() => {
  //   async function fetchTimeSlots() {
  //     try {
  //       const { data: Appointments, error } = await supabase
  //         .from("Appointments")
  //         .select("time")
  //         .gte("date", "2024-05-16")
  //         .lte("date", "2025-05-31");

  //       if (error) {
  //         throw error;
  //       }

  //       console.log(Appointments); // Log the fetched appointments
  //       setTimeSlots(Appointments);
  //     } catch (error) {
  //       console.error("Fejl ved indlæsning af tidspunkter:", error.message);
  //     }
  //   }
  //   fetchTimeSlots();
  // }, []);
