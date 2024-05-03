import React, { useState } from "react";

export default function MinFormular() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Her kan du håndtere den indsendte formulardata, f.eks. sende det til en API eller en anden funktion.
    console.log("Dato:", selectedDate);
    console.log("Tidspunkt:", selectedTime);
  };

  return (
    <div className="container mx-auto mt-[300px] px-4">
      <h1 className="text-2xl font-semibold mb-4">Bookingformular</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mb-2">
          Dato:
          <input type="date" value={selectedDate} onChange={handleDateChange} className="border border-gray-300 rounded-md p-2 ml-2" />
        </label>
        <label className="mb-2">
          Tidspunkt:
          <input type="time" value={selectedTime} onChange={handleTimeChange} className="border border-gray-300 rounded-md p-2 ml-2" />
        </label>
        <button type="submit" className="bg-darkBeige text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300">
          Indsend
        </button>
      </form>
    </div>
  );
}