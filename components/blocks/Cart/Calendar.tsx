import LightBeigeButton from "@/components/buttons/LightBeigeButton";
import { useState } from "react";
import Timeslot from "./Timeslot";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const renderCalendar = (month, year) => {
    const totalDays = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const calendar = [];

    for (let i = 0; i < offset; i++) {
      calendar.push(<div key={`empty-${i}`} className="text-center py-1" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      let containerClass = "text-center rounded-md shadow-md";
      let dateClass = "bg-lightBeige rounded-md hover:bg-lightBlue";

      if (date.getDay() === 0 || date.getDay() === 6) {
        dateClass = "bg-gray-500 rounded-md";
      }

      calendar.push(
        <div key={i} className={containerClass}>
          <div className={dateClass}>{i}</div>
        </div>
      );
    }

    return calendar;
  };

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
    return null; // Hvis showCalendar er falsk, returnerer vi ingenting (komponenten lukkes)
  }


  return (
    <div className="max-w-xl mx-auto bg-mediumBeige p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
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
      <div className="grid grid-cols-7 gap-5 md:p-[20px] p-2 bg-mediumBeige ">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold text-center">
            {day}
          </div>
        ))}
        {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
      </div>
      <div onClick={toggleTimeSlot} className="grid justify-center">
      <LightBeigeButton text={props.text}/>
      </div>
      {showTimeSlot && (
        <div className=" m-6 absolute">
          <Timeslot></Timeslot>
        </div>
      )}
           <div className="absolute top-0 right-0 p-3" onClick={closeCalendar}>
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
