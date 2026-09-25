"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { GymContext } from "@/context/GymContext";

const Navbar = () => {
  const { addPlain, saveGym } = useContext(GymContext);
  return (
    <header className="w-full border-b border-[#1f1f1f] bg-blac ">
      <div className=" container mx-auto flex min-h-[72px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
        <div >
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="FitLog"
              width={40}
              height={30}
              className="h-[28px] w-auto sm:h-[32px]"
            />
            <span
              className="ml-2 text-[12px] font-black tracking-tight text-white"
            >
              FITLOG
            </span >
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/workout"
            className="relative py-6 text-[10px] font-bold tracking-[0.12em] text-[#ccff00] sm:text-[11px]"
          >
            WORKOUT
          </Link>

          <Link
            href="/myplain"
            className="py-6 text-[10px] font-bold tracking-[0.12em] text-[#71717a] transition-colors hover:text-white sm:text-[11px]"
          >
            MY PLAN
          </Link>
        </nav>

        {/* COUNTERS */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            className="flex h-[32px] items-center gap-2 bg-[#ccff00] px-2.5 text-[9px] font-black tracking-[0.12em] text-black sm:h-[34px] sm:px-3 sm:text-[10px]"
          >
            PLAN  ({addPlain.length})
          </button>

          <button
            className="flex h-[32px] items-center gap-2 border border-[#3f3f46] px-2.5 text-[9px] font-black tracking-[0.12em] text-white sm:h-[34px] sm:px-3 sm:text-[10px]"
          >
            SAVED ({saveGym.length})
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
