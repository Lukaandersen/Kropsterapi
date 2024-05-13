// import { useState } from "react";

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const renderCalendar = (month, year) => {
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

//     const calendar = [];

//     for (let i = 0; i < offset; i++) {
//       calendar.push(<div key={`empty-${i}`} />);
//     }

//     for (let i = 1; i <= totalDays; i++) {
//       calendar.push(
//         <div key={i} className="text-center py-1 border">
//           {i}
//         </div>
//       );
//     }

//     return calendar;
//   };

//   const handlePrevMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
//     setCurrentDate(newDate);
//   };

//   const handleNextMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
//     setCurrentDate(newDate);
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-mediumBeige p-6 rounded shadow">
//       <div>
//         <h1>Dette er en Kalender</h1>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={handlePrevMonth} className="text-gray-600 focus:outline-none">
//           &lt;
//         </button>
//         <h2 className="text-xl font-bold">
//           {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
//         </h2>
//         <button onClick={handleNextMonth} className="text-gray-600 focus:outline-none">
//           &gt;
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-5 p-[20px] bg-mediumBeige">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="font-semibold text-center ">
//             {day}
//           </div>
//         ))}
//         {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

//---------------

// import { useState } from "react";

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const renderCalendar = (month, year) => {
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

//     const calendar = [];

//     for (let i = 0; i < offset; i++) {
//       calendar.push(<div key={`empty-${i}`} />);
//     }

//     for (let i = 1; i <= totalDays; i++) {
//       const date = new Date(year, month, i);
//       let className = "text-center py-1 border";

//       // Tilføj farve til den første dag i hver måned
//       if (i === 1) {
//         className += " text-green-600"; // F.eks. grøn farve
//       }

//       // Tilføj farve til søndage og lørdage
//       if (date.getDay() === 0 || date.getDay() === 6) {
//         className += " text-red-600"; // F.eks. rød farve
//       }

//       calendar.push(
//         <div key={i} className={className}>
//           {i}
//         </div>
//       );
//     }

//     return calendar;
//   };

//   const handlePrevMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
//     setCurrentDate(newDate);
//   };

//   const handleNextMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
//     setCurrentDate(newDate);
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-mediumBeige p-6 rounded shadow">
//       <div>
//         <h1>Dette er en Kalender</h1>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={handlePrevMonth} className="text-gray-600 focus:outline-none">
//           &lt;
//         </button>
//         <h2 className="text-xl font-bold">
//           {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
//         </h2>
//         <button onClick={handleNextMonth} className="text-gray-600 focus:outline-none">
//           &gt;
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-5 p-[20px] bg-mediumBeige">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="font-semibold text-center">
//             {day}
//           </div>
//         ))}
//         {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

//-----------------

// import { useState } from "react";

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const renderCalendar = (month, year) => {
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

//     const calendar = [];

//     for (let i = 0; i < offset; i++) {
//       calendar.push(<div key={`empty-${i}`} className="text-center py-1 border" />);
//     }

//     for (let i = 1; i <= totalDays; i++) {
//       const date = new Date(year, month, i);
//       let containerClass = "text-center  rounded-md";
//       let dateClass = "";

//       // Tilføj baggrundsfarve til den første dag i hver måned
//       if (i === 1) {
//         dateClass += " bg-green-200 rounded-md"; // F.eks. grøn baggrundsfarve
//       }

//       // Tilføj baggrundsfarve til søndage og lørdage
//       if (date.getDay() === 0 || date.getDay() === 6) {
//         dateClass += " bg-red-200 rounded-md"; // F.eks. rød baggrundsfarve
//       }

//       calendar.push(
//         <div key={i} className={containerClass}>
//           <div className={dateClass}>{i}</div>
//         </div>
//       );
//     }

//     return calendar;
//   };

//   const handlePrevMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
//     setCurrentDate(newDate);
//   };

//   const handleNextMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
//     setCurrentDate(newDate);
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-mediumBeige p-6 rounded shadow">
//       <div>
//         <h1>Dette er en Kalender</h1>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={handlePrevMonth} className="text-gray-600 focus:outline-none">
//           &lt;
//         </button>
//         <h2 className="text-xl font-bold">
//           {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
//         </h2>
//         <button onClick={handleNextMonth} className="text-gray-600 focus:outline-none">
//           &gt;
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-5 p-[20px] bg-mediumBeige">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="font-semibold text-center">
//             {day}
//           </div>
//         ))}
//         {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
import { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
      let dateClass = "bg-lightBeige rounded-md";

      // Tilføj skyggeeffekt til søndage og lørdage
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
      <div className="grid grid-cols-7 gap-5 md:p-[20px] p-2 bg-mediumBeige">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold text-center">
            {day}
          </div>
        ))}
        {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
      </div>
    </div>
  );
};

export default Calendar;
