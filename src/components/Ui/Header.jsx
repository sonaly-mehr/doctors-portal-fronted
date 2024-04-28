"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Header = ({ navLinks, session }) => {
  const router = useRouter();
  console.log("session", session)
  return (
    <div className="w-[90%] m-auto flex justify-between py-5">
      <div>
        <span className="text-lg text-black">Doctors Portal</span>
      </div>
      <ul className="nav_links">
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
            className="bg-secondary capitalize text-sm"
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
            className="bg-secondary capitalize text-sm"
          >
            Login
          </Button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
