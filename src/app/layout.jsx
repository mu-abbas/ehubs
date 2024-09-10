import Image from 'next/image';
import './globals.css';
import logo from '@/assets/logo.png';
import Nav from '@/components/navbar/Nav';
import { Providers } from './providers';
import UserInfo from '@/components/header/UserInfo';

export const metadata = {
  title: 'E-Hubs | Al-Dawaa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>
          <div className="grid grid-cols-[16rem_1fr] grid-rows-[min-content_1fr] w-screen h-screen overflow-hidden">
            <header className="flex items-center justify-end h-16 col-start-2 px-6 shadow-md">
              <UserInfo />
            </header>
            <aside className="flex flex-col col-start-1 row-span-2 row-start-1 gap-16 py-6 bg-lightGray">
              <Image src={logo} alt="al-dawaa" className="w-1/2 mx-auto" />
              <Nav />
            </aside>
            <main className="col-start-2 row-start-2 p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
