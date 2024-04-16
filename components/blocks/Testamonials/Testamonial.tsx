
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
        <div className='bg-mediumBeige py-6 text-primaryPurple'>
        <div className='flex flex-col items-center gap-6 '>
        <h3 className='text-sm'>Melissa Nielsen</h3>
        <h2 className='text-xl playfair'>Så tryg og professionel behandling</h2>
        <p className='text-center max-w-[820px]'>Jeg har aldrig før prøvet kropsterapi og jeg var lidt skeptisk og 
nervøs for om det var grænseoverskridende. 
Det var så behageligt og slet ikke utrygt. Charlotte har en rigtig fin
lille klinik på Østerbro som er nem at komme til. Jeg er glad for
at jeg kastede mig ud i det og tog afsted. </p>
</div>
<div className="flex justify-center gap-4 mt-8">
                <div>
                    <button ref={navigationPrevRef} className="previous rounded border-primary border-2 p-2">
                        <ArrowIcon />
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <button ref={navigationNextRef} className="next rounded border-primary border-2 p-2">
                        <ArrowIcon scaleX={-1} />
                    </button>
                </div>
            </div>
        </div>
    )
}
