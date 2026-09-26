import Image from "next/image";
import React from "react";
import { IGym } from "@/types/gym.types";

import Addbutton from "@/components/gymdetailspage/Addbutton";
import Savebutton from "@/components/gymdetailspage/Savebutton";
import NotFound from "@/app/not-found";

interface GymDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getGyms = async (): Promise<IGym[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: IGym[] = await res.json();

  return data;
};

const GymDetails = async ({ params }: GymDetailsProps) => {
  const { id } = await params;

  const gymData = await getGyms();

  const gym = gymData.find((item: IGym) => item.id === Number(id)) as IGym;

if (!gym) {
  return <NotFound />;
}

  return (
    <div className="min-h-screen bg-[#090a0c] px-4 py-7">
      <div className="mx-auto w-full max-w-[1230px]">
        <div className="grid grid-cols-1 gap-8 rounded-[8px] border border-[#24272d] bg-[#0f1014] p-6 lg:grid-cols-[343px_1fr]">
          <div className="h-[550px] overflow-hidden rounded-[8px]">
            <Image
              src={gym.image}
              alt={gym.name}
              width={373}
              height={530}
              className="h-full w-full"
            />
          </div>

          <div className="pt-1">
            <h1 className="text-[30px] font-black uppercase leading-none tracking-tight text-white">
              {gym.name}
            </h1>

            <p className="mt-2 max-w-[520px] text-[14px] leading-[1.5] text-[#777b83]">
              {gym.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {gym.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-2.5 py-1 text-[8px] font-black uppercase leading-none text-[#090a0c]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-4 max-w-[540px] overflow-hidden rounded-[8px] border border-[#24272d] bg-[#15171c]">
              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Equipment
                </span>

                <span className="text-[11px] text-white">
                  {gym.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Difficulty
                </span>

                <span className="text-[11px] text-white">
                  {gym.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Sets
                </span>

                <span className="text-[11px] text-white">
                  {gym.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Reps
                </span>

                <span className="text-[11px] text-white">
                  {gym.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Duration
                </span>

                <span className="text-[11px] text-white">
                  {gym.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24272d] px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Calories
                </span>

                <span className="text-[11px] text-white">
                  {gym.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-3.5 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#8a8e96]">
                  Rating
                </span>

                <span className="text-[11px] text-white">
                  {gym.rating}
                </span>
              </div>
            </div>

            <div className="mt-5 max-w-[550px]">
              <h2 className="text-[16px] font-black uppercase tracking-[0.04em] text-white">
                Instructions
              </h2>

              <ol className="mt-2 space-y-2">
                {gym.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-[14px] leading-[1.5] text-[#858991]"
                  >
                    <span className="shrink-0 text-[#777b83]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <Addbutton gym={gym} />

              <Savebutton gym={gym} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetails;