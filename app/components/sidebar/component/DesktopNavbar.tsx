"use client";

import DesktopItem from "./DesktopItem";
import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import { User } from "@prisma/client";
import ThemeToggler from "../../ThemeToggler";
import { HiUsers } from "react-icons/hi2";
import { HiChat } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import Image from "next/image";

interface DesktopSidebarProps {
  currentUser: User | null;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="
        hidden 
        lg:fixed 
        lg:top-0
        lg:left-0 
        lg:mb-2
        lg:z-40 
        lg:w-60 
        lg:h-full
        xl:px-6
        p-1
        m-2
        rounded-3xl
        lg:overflow-y-auto 
        bg-white 
        dark:bg-gray-700
        lg:border-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
        dark:border-slate-600
        shadow-md
      "
      >
        <nav className="mt-4 flex flex-col justify-between">
          <Image
            width={80}
            height={50}
            className="mx-auto w-auto p-4 m-1 filter invert dark:invert-0"
            src={"/images/Info.png"}
            alt="nft"
          />
          <ul role="list" className="flex flex-col items-center space-y-2">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-2">
            <DesktopItem
              key="profile"
              href="/profile"
              label="Profile"
              icon={HiUsers}
              active={false}
              onClick={() => {}}
            />
            <DesktopItem
              key="updates"
              href="/updates"
              label="Updates"
              icon={HiChat}
              active={false}
              onClick={() => {}}
            />
            <DesktopItem
              key="wallet"
              href="/updates"
              label="Link More Wallet"
              icon={MdSettings}
              active={false}
              onClick={() => {}}
            />
          </ul>
          <ThemeToggler />
          <div className="text-xs px-4 text-gray-500">
            &copy; JuiceVendor Labs 2023
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
