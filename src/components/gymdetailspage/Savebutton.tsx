"use client";

import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

import { GymContext } from "@/context/GymContext";
import { IGym } from "@/types/gym.types";

const Savebutton = ({ gym }: { gym: IGym }) => {
  const { saveGym, setsaveGym } = useContext(GymContext);

  const handleAddSave = () => {
    // Check duplicate workout
    const alreadySaved = saveGym.some(
      (item) => item.id === gym.id
    );

    if (alreadySaved) {
      toast.error(
        ` ${gym.name} is already added in saved.`
      );

      return;
    }

    // Save workout
    setsaveGym([...saveGym, gym]);

    // Success toast
    toast.success(
      ` ${gym.name} is added  to  saved .`
    );
  };

  return (
    <button
      type="button"
      onClick={handleAddSave}
      className="flex cursor-pointer items-center gap-2 rounded-[6px] border border-[#30333a] bg-transparent px-3.5 py-2 text-[12px] font-medium text-white transition hover:bg-[#646568]"
    >
      <FiBookmark className="shrink-0 text-[14px]" />

      <span>Save for later</span>
    </button>
  );
};

export default Savebutton;