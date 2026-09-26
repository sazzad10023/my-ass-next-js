import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#09090b] text-center">
      <h1 className="text-7xl font-black text-[#ccff00]">404</h1>

      <p className="mt-4 text-xl font-bold text-white">
        Workout not found
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/workout"
        className="mt-6 bg-[#ccff00] px-5 py-3 text-sm font-bold text-black">
        BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;