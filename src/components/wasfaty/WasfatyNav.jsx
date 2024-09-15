'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function WasfatyNav() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-gray">
      <ul className="flex items-center justify-evenly">
        <li
          className={`w-1/3 border-b-2 transition duration-300 ${
            pathname === '/wasfaty/sensors' ? 'border-blue text-blue bg-lightBlue/15' : 'border-transparent'
          }`}
        >
          <Link href="/wasfaty/sensors" className="inline-block w-full p-3 text-center">
            Sensors
          </Link>
        </li>
        <li
          className={`w-1/3 border-b-2 transition duration-300 ${
            pathname === '/wasfaty/search' ? 'border-blue text-blue bg-lightBlue/15' : 'border-transparent'
          }`}
        >
          <Link href="/wasfaty/search" className="inline-block w-full p-3 text-center">
            Search
          </Link>
        </li>
        <li
          className={`w-1/3 border-b-2 transition duration-300 ${
            pathname === '/wasfaty/upload' ? 'border-blue text-blue bg-lightBlue/15' : 'border-transparent'
          }`}
        >
          <Link href="/wasfaty/upload" className="inline-block w-full p-3 text-center">
            Upload
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default WasfatyNav;
