import BrownButton from "@/components/buttons/BrownButton";
import PurpleButton from "@/components/buttons/purpleButton";
import React from "react";
import { useState, useEffect } from "react";
import supabase from "@/app/config/supabaseClient";

const Timeslot = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  useEffect(() => {
    async function fetchTimeSlots() {
      try {
        const { data: appointments, error } = await supabase.from("Appointments").select("time");
        if (error) {
          throw error;
        }
        setTimeSlots(appointments);
      } catch (error) {
        console.error("Fejl ved indlæsning af tidspunkter:", error.message);
      }
    }
    fetchTimeSlots();
  }, []);

  return (
    <div className="block md:flex">
      <div className="md:w-auto">
        <div className="bg-primaryPurple  border-gray-200 rounded-md p-4 ">
          <h2 className="text-lg font-semibold mb-2 text-primaryLight">Ledige tidspunkter</h2>
          <div className="grid grid-cols-3 gap-4">
            {timeSlots.map((slot, index) => (
              <div key={index} className="bg-mediumBeige p-2 rounded-md shadow-md hover:bg-lightBlue">
                <p className="text-sm font-medium">{slot.time}</p>
              </div>
            ))}
          </div>
          <div className="grid justify-center">
            <PurpleButton></PurpleButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeslot;
