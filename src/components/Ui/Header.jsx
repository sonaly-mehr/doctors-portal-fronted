"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { signOut } from "next-auth/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = ({ navLinks, session }) => {
  console.log("session", session);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-[90%] m-auto flex justify-between py-5 relative">
      <div>
        <span className="text-base lg:text-xl font-black text-[#19D3AE] uppercase">
          Doctors Portal
        </span>
      </div>
      {/* Hamburger-menu */}
      <HiOutlineMenuAlt3
        className="text-black text-3xl block md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      <ul
        className={`nav_links fixed md:static ${
          showMenu
            ? "flex flex-col pt-16 pl-14 text-2xl text-white font-semibold gap-14 gradient__effect w-[80%] h-screen left-0 bottom-0 top-0 z-50 ease-in duration-500"
            : "hidden"
        }`}
      >
        {navLinks?.map((item) => (
          <li key={item?.key}>
            {" "}
            <Link href={`${item?.href}`}>{item?.label}</Link>
          </li>
        ))}

        {session ? (
          <Button
            variant="gradient"
            size="sm"
            className="gradient__effect capitalize text-sm"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button
              variant="gradient"
              size="sm"
              className="gradient__effect capitalize text-sm"
            >
              Login
            </Button>
          </Link>
        )}
        <RxCross2
          className="text-white text-3xl block md:hidden cursor-pointer absolute top-5 right-5"
          onClick={() => setShowMenu(!showMenu)}
        />
      </ul>
    </div>
  );
};

export default Header;
