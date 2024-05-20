"use client";
import React from "react";
import { useState } from "react";
import supabase from "@/app/config/supabaseClient";

export default function Admin() {
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
    console.log("Dato:", selectedDate);
    console.log("Tidspunkt:", selectedTime);
  };

  async function submit(e: any) {
    e.preventDefault();
    const values = new FormData(e.target);
    console.log(values.get("date"));
    const { data, error } = await supabase
      .from("Appointments")
      .insert([{ date: values.get("date"), time: values.get("time") }])
      .select();
    console.log(data);
  }
  return (
    <div className="bg-darkBeige">
      <div className="container m-4 mx-auto w-[300px] md:w-[700px] my-[130px] md:px-4 bg-primaryLight py-[50px] rounded-lg">
        <h1 className="text-lg md:text-2xl text-center font-semibold mb-4 text-primaryPurple">Opret nye tider for Bookinger</h1>
        <form onSubmit={submit} className="flex flex-col items-center pt-7">
          <div className=" grid md:flex gap-7 text-primaryPurple">
            <label className="mb-4">
              Dato:
              <input name="date" type="date" value={selectedDate} onChange={handleDateChange} className="border border-gray-300 rounded-md p-2 ml-2   w-[160px]" />
            </label>
            <label className="mb-2">
              Tidspunkt:
              <input name="time" type="time" value={selectedTime} onChange={handleTimeChange} className="border border-gray-300 rounded-md p-2 ml-2 w-[100px]" />
            </label>
          </div>
          <button type="submit" className="bg-darkBeige text-primaryLight font-semibold py-2 px-4 rounded-md mt-4 hover:bg-primaryPurple transition duration-300">
            Indsend
          </button>
        </form>
      </div>
    </div>
  );
}
