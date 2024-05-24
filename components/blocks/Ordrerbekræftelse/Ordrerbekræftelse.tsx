import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/config/supabaseClient";

export default function Ordrerbekræftelse() {
  const [bookingInfo, setBookingInfo] = useState(null);

  useEffect(() => {
    async function fetchBookingInfo() {
      try {
        // Hent de seneste bookingoplysninger fra Supabase
        const { data: bookings, error } = await supabase
          .from("Appointments")
          .select("booked")
          .order("id", { ascending: false })
          .limit(1);

        if (error) {
          throw error;
        }

        if (bookings.length === 0) {
          throw new Error("No bookings found.");
        }

        // Pars JSON-strengen fra den seneste booking
        const bookedData = JSON.parse(bookings[0].booked);
        setBookingInfo(bookedData); // Opdater state med bookingoplysningerne
      } catch (error) {
        console.error("Error fetching booking information:", error.message);
      }
    }

    fetchBookingInfo();
  }, []);

  return (
    <div className="mt-32">
      <Link href="/" className="flex gap-3 justify-center mb-5 text-primaryPurple">
        <ArrowIcon />
        <p className="text-p">Gå tilbage til forsiden</p>
      </Link>
      <div className="bg-mediumBeige mx-10 mb-12  flex flex-col items-center text-base justify-center gap-4 p-5 md:p-10 md:mx-56 text-primaryPurple">
        <h2 className="text-h2M md:text-h2D">Ordrebekræftelse</h2>
        {bookingInfo ? (
          <>
            <p className="text-center text-p">Din booking er nu bekræftet og vi har sendt dig en email på: {bookingInfo.email}</p>
            <p className="text-center text-p">Din booking reference er: {bookingInfo.name}</p>
            <p className="text-center text-p">Din valgte tid er reserveret og jeg vil sende dig en endelig mail med bekræftelse på at din tid er booket og aftalen er i hus.</p>
            <p className="text-center text-p">Jeg glæder mig til at møde dig og bidrage til dit velbefindende.</p>
          </>
        ) : (
          <p className="text-center text-p">Loading...</p>
        )}
      </div>
    </div>
  );
}

const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" style={{ transform: `scaleX(${scaleX})` }}>
    <path strokeWidth="2" d="M11 19l-7-7 7-7" />
    <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
  </svg>
);
