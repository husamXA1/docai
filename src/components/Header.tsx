"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <header className="bg-teal-950">
      <div className="container mx-auto flex items-center justify-between py-3 relative">
        <div className="text">
          <h1 className="text-teal-500 font-bold text-2xl">
            <Link href={"/"}>DocAI</Link>
          </h1>
        </div>
        <nav
          className={`${
            isOpenedMenu ? "" : "max-md:hidden"
          } max-md:absolute max-md:bottom-0 max-md:right-0 max-md:p-5 max-md:translate-y-full bg-teal-950 rounded-b text-teal-100`}
        >
          <ul className="flex items-center justify-center gap-3 max-md:flex-col">
            <li>
              <Link
                className="hover:underline"
                href={"/ai"}
                onClick={() => setIsOpenedMenu(false)}
              >
                ChatBot
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href={"/articles"}
                onClick={() => setIsOpenedMenu(false)}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href={"/contact"}
                onClick={() => setIsOpenedMenu(false)}
              >
                Contact a Doctor
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-teal-100"
          onClick={() => setIsOpenedMenu((current) => !current)}
        >
          <FaBars size={20} />
        </button>
      </div>
    </header>
  );
}
