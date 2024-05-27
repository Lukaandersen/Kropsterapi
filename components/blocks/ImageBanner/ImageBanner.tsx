import Image from "next/image";

export default function ImageBanner() {
    return (
      <div className="relative h-[250px] md:h-[300px]">
        <div className="grid grid-cols-5 h-full">
          <Image src="/Clinic-pictures/_DSF1706.jpg" alt="" width={250} height={50} className="object-cover w-full h-full" />
          <Image src="/Clinic-pictures/_DSF1710.jpg" alt="" width={250} height={50} className="object-cover w-full h-full" />
          <Image src="/Clinic-pictures/_DSF1719.jpg" alt="" width={250} height={50} className="object-cover w-full h-full" />
          <Image src="/Clinic-pictures/_DSF1763.jpg" alt="" width={250} height={50} className="object-cover w-full h-full" />
          <Image src="/Clinic-pictures/_DSF1868.jpg" alt="" width={250} height={50} className="object-cover w-full h-full" />
        </div>
      </div>
    );
  }
  