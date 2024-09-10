'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineUsers, HiOutlineCog6Tooth } from 'react-icons/hi2';
import wasfaty from '@/assets/wasfaty.png';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname(); // Use the `useRouter` hook to access the router object.
  return (
    <nav className="pl-6">
      <ul className="flex flex-col">
        <li>
          <Link href="/" className={`flex items-center w-full gap-4 py-3 pl-4 ${pathname === '/' ? 'bg-gray' : ''}`}>
            <HiOutlineHome size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/wasfaty"
            className={`flex items-center w-full gap-4 py-3 pl-4 ${pathname.startsWith('/wasfaty') ? 'bg-gray' : ''}`}
          >
            <Image src={wasfaty} alt="wasfaty" className="size-5 grayscale" />
            <p>Wasfaty</p>
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={`flex items-center w-full gap-4 py-3 pl-4 ${pathname.startsWith('/users') ? 'bg-gray' : ''}`}
          >
            <HiOutlineUsers size={20} />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className={`flex items-center w-full gap-4 py-3 pl-4 ${pathname.startsWith('/settings') ? 'bg-gray' : ''}`}
          >
            <HiOutlineCog6Tooth size={20} />
            <span>Setting</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
