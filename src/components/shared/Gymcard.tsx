import { IGym } from "@/types/gym.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IgymProps {
  gym: IGym;
}

const Gymcard = ({ gym }: IgymProps) => {
  return (
    <Link href={`/workout/${gym.id}`} className="block">
      <div className=" w-100 h-auto overflow-hidden rounded-[8px] border border-[#24272d] bg-[#15171c] transition-colors hover:border-[#636f3e]">
        {/* Image */}
        <div className="h-[220px] w-110 overflow-hidden">
          <Image
            src={gym.image}
            alt={gym.name}
            width={300}
            height={175}
            className="h-full w-full"
          />
        </div>

        {/* Card Content */}
        <div className="px-4 pb-4 pt-3">
          {/* Muscle Groups */}
          <div className="mb-2.5 flex min-h-[20px] flex-wrap items-center gap-[5px]">
            {gym.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-[8px] py-[4px] text-[9px] font-black uppercase leading-none tracking-[0.02em] text-[#090a0c]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="truncate text-[14px] font-black uppercase leading-[1.25] tracking-[0.01em] text-white">
            {gym.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 truncate text-[10px] font-medium leading-none text-[#686b72]">
            {gym.equipment}
          </p>

          {/* Divider */}
          <div className="my-3.5 h-px bg-[#24272d]" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-[14px] font-medium leading-none text-[#777b83]">
            <span className="whitespace-nowrap">
              ◷ {gym.duration} min
            </span>

            <span className="whitespace-nowrap">
              ● {gym.caloriesBurned} kcal
            </span>

            <span className="whitespace-nowrap">
              ★ {gym.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gymcard;