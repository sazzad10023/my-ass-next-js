"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";

import { GymContext } from "@/context/GymContext";

const Navbar = () => {
  const { addPlain, saveGym } = useContext(GymContext);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#1f1f1f] bg-[#09090b]">
      <div className="container mx-auto flex min-h-[64px] w-full max-w-[1280px] items-center justify-between gap-2 px-3 sm:min-h-[72px] sm:px-6">
        <div className="shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="FitLog"
              width={40}
              height={30}
              className="h-[24px] w-auto sm:h-[32px]"
            />

            <span className="ml-1.5 text-[12px] font-black tracking-tight text-white sm:ml-2 sm:text-[18px]">
              FITLOG
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-2 sm:gap-8 md:flex">
          <Link
            href="/workout"
            className="relative py-5 text-[8px] font-bold tracking-[0.08em] text-[#ccff00] transition-colors hover:text-white sm:py-6 sm:text-[11px] sm:tracking-[0.12em]"
          >
            WORKOUT
          </Link>

          <Link
            href="/myplain"
            className="py-5 text-[8px] font-bold tracking-[0.08em] text-[#71717a] transition-colors hover:text-white sm:py-6 sm:text-[11px] sm:tracking-[0.12em]"
          >
            MY PLAN
          </Link>
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/myplain"
            className="flex items-center gap-3 text-[16px] font-medium text-[#d4d4d8] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[25px] w-[30px] items-center justify-center rounded-full bg-[#ccff00] text-[14px] font-bold text-black">
              {addPlain.length}
            </span>
          </Link>

          <Link
            href="/myplain"
            className="flex items-center gap-3 text-[16px] font-medium text-[#a1a1aa] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[25px] w-[30px] items-center justify-center rounded-full border border-[#292d35] text-[14px] font-medium text-[#d4d4d8]">
              {saveGym.length}
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] border border-[#3f3f46] text-white transition hover:border-[#dfe1e9] md:hidden"
        >
          <FiMenu className="text-[18px]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;