import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className=" w-full flex-wrap text-white p-7 px-[180px] bg-gray-900 flex justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-8 text-3xl sx:block hover:cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div className="hidden w-[300px] sm:block ">
          <Link href="/">Home</Link>
          <Link href="/about" className="mx-[30px]">
            About
          </Link>

          <Link href="/contact">Contacts</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
