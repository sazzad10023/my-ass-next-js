"use client";

import React, { useContext } from "react";
import { PiCalendarPlusLight } from "react-icons/pi";
import { toast } from "react-toastify";

import { GymContext } from "@/context/GymContext";
import { IGym } from "@/types/gym.types";

const Addbutton = ({ gym }: { gym: IGym }) => {
  const { addPlain, setaddPlain } = useContext(GymContext);

  const handleGym = () => {
    // Check duplicate workout
    const alreadyAdded = addPlain.some(
      (item: IGym) => item.id === gym.id
    );

    if (alreadyAdded) {
      toast.error(
        ` ${gym.name} is already added in Today’s Plan.`
      );

      return;
    }

    // Add workout
    setaddPlain([...addPlain, gym]);

    // Success toast
    toast.success(
      ` ${gym.name} added to  Today’s Plan.`
    );
  };

  return (
    <button
      onClick={handleGym}
      className="flex cursor-pointer items-center gap-2 rounded-[6px] bg-[#c8ff00] px-3.5 py-2 text-[12px] font-bold text-[#090a0c] transition hover:bg-[#7a7c74]"
    >
      <PiCalendarPlusLight className="shrink-0 text-[14px]" />

      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default Addbutton;