'use client';

import { Avatar } from '@nextui-org/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { HiOutlineUser } from 'react-icons/hi2';
import { TbLogout2 } from 'react-icons/tb';
import { RxDropdownMenu } from 'react-icons/rx';

function UserInfo() {
  return (
    <div className="flex items-center gap-2">
      <Avatar showFallback src="/android-chrome-192x192.png" className="p-1 mr-2 border border-lightGray" />
      <p>E009</p>
      <Dropdown>
        <DropdownTrigger>
          <Button className="px-2 overflow-hidden rounded-md min-w-min w-min">
            <RxDropdownMenu size={24} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" className="bg-white border rounded-md shadow-md border-lightGray">
          <DropdownItem key="profile" className="p-3 transition duration-300 rounded-md hover:bg-gray">
            <p className="flex items-center gap-2">
              <HiOutlineUser size={20} />
              <span>Profile</span>
            </p>
          </DropdownItem>
          <DropdownItem key="sign-out" className="p-3 transition duration-300 rounded-md hover:bg-gray">
            <p className="flex items-center gap-2">
              <TbLogout2 size={20} />
              <span>Sign out</span>
            </p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default UserInfo;
