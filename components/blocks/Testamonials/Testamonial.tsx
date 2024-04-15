
import { SVGProps } from 'react';
import { useRef } from 'react';

const ArrowIcon: React.FC<{ scaleX?: number }> = ({ scaleX = 1 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
        style={{ transform: `scaleX(${scaleX})` }}
    >
        <path strokeWidth="2" d="M11 19l-7-7 7-7" />
        <line x1="5" y1="12" x2="22" y2="12" strokeWidth="2" />
    </svg>
);



export default function Testamonial () {

    const navigationNextRef = useRef<HTMLButtonElement>(null);
    const navigationPrevRef = useRef<HTMLButtonElement>(null);
    return(
        <div>
        <h1>{}</h1>
        <button ref={navigationPrevRef} className="previous rounded border-primary border-2 p-2">
        <ArrowIcon />
        </button>
        <button ref={navigationNextRef} className="next rounded border-primary border-2 p-2" >
        <ArrowIcon scaleX={-1} />
        </button>
        </div>
    )
}
