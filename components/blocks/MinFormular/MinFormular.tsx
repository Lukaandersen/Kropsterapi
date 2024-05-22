import React from "react";
import { useState } from "react";

export default function MinFormular() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Her kan du håndtere den indsendte formulardata, f.eks. sende det til en API eller en anden funktion.
    console.log("Dato:+hej", selectedDate);
    console.log("Tidspunkt:", selectedTime);
  };

  return (
    <div>
      <div className="container mx-auto mt-[300px] px-4 bg-lightBeige py-[100px]">
        <h2 className="text-h2M md:text-h2D text-center font-semibold mb-4 text-primaryPurple">Bookingformular</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="mb-2">
            Dato:
            <input name="date" type="date" value={selectedDate} onChange={handleDateChange} className="border border-gray-300 rounded-md p-2 ml-2 w-[200px]" />
          </label>
          <label className="mb-2">
            Tidspunkt:
            <input name="time" type="time" value={selectedTime} onChange={handleTimeChange} className="border border-gray-300 rounded-md p-2 ml-2 w-[200px]" />
          </label>
          <button type="submit" className="bg-darkBeige text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-primaryPurple transition duration-300">
            Indsend
          </button>
        </form>
      </div>
    </div>
  );
}
