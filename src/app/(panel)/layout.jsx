import UserInfo from '@/components/header/UserInfo';
import Nav from '@/components/navbar/Nav';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import BreadCrumb from '@/ui/BreadCrumb';

function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[min-content_1fr] w-screen h-screen overflow-hidden">
      <header className="flex items-center justify-between h-16 col-start-2 px-6 shadow-md">
        <BreadCrumb />
        <UserInfo />
      </header>
      <aside className="flex flex-col col-start-1 row-span-2 row-start-1 gap-16 py-6 bg-lightGray">
        <Image src={logo} alt="al-dawaa" className="w-1/2 mx-auto" />
        <Nav />
      </aside>
      <main className="col-start-2 row-start-2 p-6">{children}</main>
    </div>
  );
}

export default layout;
