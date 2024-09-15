'use client';
import { LuPenSquare } from 'react-icons/lu';
function Sensors() {
  return (
    <section className="py-6 grid grid-cols-4 grid-rows-[min-content_1fr] gap-4 h-[calc(100vh-139px)]">
      <div className="flex flex-col justify-between h-24 p-3 text-sm rounded-md bg-offWhite">
        <div className="flex items-center gap-2">
          <p className="font-medium">Id:</p>
          <p className="text-darkGray">2492879586</p>
          <button className="ml-auto">
            <LuPenSquare size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">Ref:</p>
          <p className="text-darkGray">i5302395</p>
          <button className="ml-auto">
            <LuPenSquare size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">Dispense:</p>
          <p className="text-darkGray">03:23</p>
          <span className="ml-auto mr-1 rounded-full size-2 bg-orange"></span>
        </div>
      </div>
      <div className="h-24 col-span-2 p-2 rounded-md bg-offWhite"></div>
      <div className="h-24 p-2 rounded-md bg-offWhite"></div>
      <div className="h-full p-2 rounded-md bg-offWhite"></div>
      <div className="h-full p-2 rounded-md bg-offWhite"></div>
      <div className="h-full p-2 rounded-md bg-offWhite"></div>
      <div className="h-full p-2 rounded-md bg-offWhite"></div>
    </section>
  );
}

export default Sensors;
