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

        <div className="hidden items-center gap-1 sm:gap-2 md:flex">
          <Link
            href="/myplain"
            className="flex h-[28px] items-center rounded-[7px] bg-[#ccff00] px-2 text-[7px] font-black tracking-[0.08em] text-black transition hover:bg-[#f1f3eb] sm:h-[34px] sm:rounded-[8px] sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
          >
            PLAN ({addPlain.length})
          </Link>

          <Link
            href="/myplain"
            className="flex h-[28px] items-center rounded-[7px] border border-[#3f3f46] px-2 text-[7px] font-black tracking-[0.08em] text-white transition hover:border-[#dfe1e9] sm:h-[34px] sm:rounded-[8px] sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
          >
            SAVED ({saveGym.length})
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