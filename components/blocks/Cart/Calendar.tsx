import { useState, useEffect, useContext } from "react";
import supabase from "@/app/config/supabaseClient";
import { Button } from "@builder.io/react";
import { ProductContext } from "@/app/ProductContext";

import Timeslot from "./Timeslot";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const [availableSlots, setAvailableSlots] = useState([]);
  const { inCart, setInCart } = useContext(ProductContext);

  const [calender, setCalendar] = useState<any[]>([]);  
  useEffect(() => {
    async function get() {
      let { data: Appointments, error } = await supabase.from("Appointments").select("*").filter("date", "gte", "2024-05-16").lte("date", "2025-05-31").is("booked", null);
      console.log(Appointments);
    if (Appointments) {
      setCalendar(Appointments);
  }
}
    get();
},[]);


  const renderCalendar = (month, year, timeslots) => {
    const totalDays = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const calendarArray: any[] = [];

    for (let i = 0; i < offset; i++) {
      calendarArray.push(<div key={`empty-${i}`} className="text-center py-1" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      let containerClass = "text-center rounded-md shadow-md w-7 md:w-10";
      let dateClass = "dateClass rounded-md hover:bg-lightBlue w-7 md:w-10";

      if (date.getDay() === 0 || date.getDay() === 6) {
        dateClass = "bg-gray-500 rounded-md w-7 md:w-10 z-10";
      }

      const todaysEvents = timeslots.filter((evt) => evt.date === `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`);
      if (todaysEvents.length > 0) {
        console.log("fandt et event på " + i);
        dateClass += " bg-darkBlue";
      } else {
        console.log("fandt ikke noget på" + i, month, year, `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`);
      }
      calendarArray.push(
        <div key={i} className={containerClass}>
          <button className={dateClass} onClick={() => {setDate(todaysEvents); }}>
            {i}
          </button>
        </div>
      );
    }

    return calendarArray;
  };

  function setDate(timeSlots) {
    setAvailableSlots(timeSlots);
    console.log(timeSlots);
    setShowTimeSlot(true);
  }

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  const [showTimeSlot, setShowTimeSlot] = useState(false);

  const toggleTimeSlot = () => {
    setShowTimeSlot(!showTimeSlot);
    console.log("toggled");
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  if (!showCalendar) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto dateClass p-6 rounded shadow md:fixed md:top-[300px] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-50 md:bg-primaryLight md:h-[500px]">
      <div className="flex justify-between items-center mb-4 mt-4">
        <button onClick={handlePrevMonth} className="text-gray-600 focus:outline-none">
          &lt;
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className="text-gray-600 focus:outline-none">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-5 md:p-[20px] p-2 dateClass ">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold text-center">
            {day}
          </div>
        ))}
        {renderCalendar(currentDate.getMonth(), currentDate.getFullYear(), calender)}
      </div>
      <div onClick={toggleTimeSlot} className="grid justify-center">
        <button></button>
      </div>
      {showTimeSlot && (
        <div className=" m-6 absolute">
          <Timeslot availableSlots={availableSlots} setChosenTime={props.setChosenTime} closeCalendar={closeCalendar}></Timeslot>
        </div>
      )}
      <div className="absolute top-0 right-0 p-2" onClick={closeCalendar}>
        <CloseIcon />
      </div>
    </div>
  );
};

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default Calendar;
