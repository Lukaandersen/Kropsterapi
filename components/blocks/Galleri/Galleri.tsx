export default function Gallery() {
    
    const click = () => {
        console.log('clicked new');
        // Tilføj yderligere logik eller manipulation af data her
    }
    const click2 = () => {
        console.log('clicked hej');
        // Tilføj yderligere logik eller manipulation af data her
    }
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
        <div className="grid items-center justify-center relative p-8">
        
            <div className="grid md:grid-cols-3 gap-4 mb-5">
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3 justify-self-center"/>
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3 justify-self-center"/>
                <img src="Clinic-pictures/_DSF1706.jpg" alt="" className="w-full md:w-2/3 justify-self-center"/>
            </div>
            <div className="flex justify-center gap-5 ">
                <button className="p-2" ref={click}>
            <LeftArrowIcon />
            </button>
            <button className="p-2" ref={click2}>
            <RightArrowIcon />
            </button>
            </div>
        </div>
    );
}
