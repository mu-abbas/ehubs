'use client';
import { LuPenSquare } from 'react-icons/lu';
function Sensors() {
  return (
    <section className="py-6 grid grid-cols-12 grid-rows-[min-content_1fr] gap-4 h-[calc(100vh-139px)] text-sm">
      {/* rx details */}
      <div className="flex flex-col justify-between h-24 col-span-3 p-3 rounded-md bg-offWhite">
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
          <p className="font-medium">Approval:</p>
          <p className="text-darkGray">--:--</p>
          <span className="ml-auto mr-1 rounded-full size-2 bg-red"></span>
        </div>
      </div>

      {/* customer details */}
      <div className="flex flex-col justify-between h-24 col-span-6 p-3 rounded-md bg-offWhite">
        <div className="flex items-center gap-2">
          <p className="font-medium">Name:</p>
          <p className="text-darkGray">عبد الرحمن الخالدي</p>
          <button className="ml-auto">
            <LuPenSquare size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">Phone:</p>
          <p className="text-darkGray">0511725387</p>
          <button className="ml-auto">
            <LuPenSquare size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">Location:</p>
          <p className="text-darkGray">الدمام - بدر</p>
          <button className="ml-auto">
            <LuPenSquare size={14} />
          </button>
        </div>
      </div>

      {/* actions */}
      <div className="grid h-24 grid-cols-2 col-span-3 gap-2 p-2 rounded-md bg-offWhite">
        <button className="text-white transition duration-300 rounded-md shadow-sm active:shadow-none active:scale-95 bg-green">
          Dispense
        </button>
        <button className="transition duration-300 rounded-md shadow-sm active:shadow-none active:scale-95 bg-lightBlue">
          Noreply
        </button>
        <button className="transition duration-300 rounded-md shadow-sm active:shadow-none active:scale-95 bg-orange">
          Update
        </button>
        <button className="text-white transition duration-300 rounded-md shadow-sm active:shadow-none active:scale-95 bg-red">
          Reject
        </button>
      </div>

      {/* rx lists */}
      <div className="h-full col-span-4 p-3 overflow-hidden rounded-md bg-offWhite">
        <div className="flex items-center gap-2">
          <p className="font-medium">Action required</p>
          <span className="ml-auto rounded-full size-2 bg-orange"></span>
        </div>

        <ul className="h-[calc(100%-36px)] overflow-y-scroll rounded-md mt-4 orange-scrollbar">
          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 rounded-md bg-gray border-darkGray/25">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-red">
                  today
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-red">
                  today
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-orange">
                  1 day
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-green">
                  2 days
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-green">
                  2 days
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-green">
                  3 days
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>

          <li className="pb-2 pr-2 last:!pb-0">
            <button className="w-full p-3 space-y-1 transition duration-300 border-2 border-transparent rounded-md bg-gray">
              <div className="flex items-center justify-between">
                <p className="font-medium text-left">i5302395</p>
                <span className="px-2 py-1 flex items-center leading-none text-[0.6rem] text-white uppercase rounded bg-green">
                  3 days
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-left">
                <p className="font-medium">Estimated date:</p>
                <time datetime="2024-09-16" className="text-darkGray">
                  16-09-2024
                </time>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div className="h-full col-span-4 p-3 rounded-md bg-offWhite">
        <div className="flex items-center gap-2">
          <p className="font-medium">Ready</p>
          <span className="ml-auto rounded-full size-2 bg-green"></span>
        </div>
      </div>

      <div className="h-full col-span-4 p-3 rounded-md bg-offWhite">
        <div className="flex items-center gap-2">
          <p className="font-medium">Noreply</p>
          <span className="ml-auto rounded-full size-2 bg-lightBlue"></span>
        </div>
      </div>
    </section>
  );
}

export default Sensors;
