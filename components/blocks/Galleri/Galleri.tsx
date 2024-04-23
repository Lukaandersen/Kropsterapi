export default function Gallery() {
    function LeftArrowIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        );
    }

    function RightArrowIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        );
    }

    return (
        <div className="grid items-center justify-center">
        
            <div className="grid md:grid-cols-3 gap-4 items-center">
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3"/>
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3"/>
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3"/>
            </div>
            <div className="flex justify-center gap-5 ">
                <button className="p-2">
            <LeftArrowIcon />
            </button>
            <button className="p-2">
            <RightArrowIcon />
            </button>
            </div>
        </div>
    );
}
