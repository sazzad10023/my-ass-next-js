// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, {
//   useContext,
//   useState,
// } from "react";

// import {
//   FiCheck,
//   FiChevronDown,
//   FiClock,
//   FiStar,
//   FiX,
// } from "react-icons/fi";

// import { IoFlameOutline } from "react-icons/io5";
// import { toast } from "react-toastify";

// import { GymContext } from "@/context/GymContext";
// import { IGym } from "@/types/gym.types";

// type SortType =
//   | "duration"
//   | "calories"
//   | "rating";

// type TabType =
//   | "today"
//   | "saved";

// /* =========================
//    EMPTY STATE
// ========================= */

// const EmptyState = ({
//   activeTab,
// }: {
//   activeTab: TabType;
// }) => {
//   let message =
//     "Browse the library and add a lift to get today moving.";

//   if (activeTab === "saved") {
//     message =
//       "Save workouts from the library to see them here.";
//   }

//   return (
//     <div className="flex min-h-[220px] items-center justify-center border border-[#24272d] bg-[#0f1014] px-5 py-[30px] text-center">
//       <div>
//         <h2 className="text-[18px] font-black tracking-tight text-white">
//           NOTHING HERE YET
//         </h2>

//         <p className="mt-1.5 text-[11px] text-[#858991]">
//           {message}
//         </p>

//         <Link
//           href="/"
//           className="mt-5 inline-flex items-center rounded-[6px] bg-[#c8ff00] px-4 py-2.5 text-[9px] font-black uppercase text-[#090a0c] transition hover:bg-[#b8ee00]"
//         >
//           Go to workouts
//         </Link>
//       </div>
//     </div>
//   );
// };

// const Myplain = () => {
//   /* =========================
//      CONTEXT
//   ========================= */

//   const {
//     addPlain,
//     setaddPlain,
//     saveGym,
//     setsaveGym,
//   } = useContext(GymContext);

//   /* =========================
//      TAB
//   ========================= */

//   const [activeTab, setActiveTab] =
//     useState<TabType>("today");

//   /* =========================
//      SORT
//   ========================= */

//   const [sortBy, setSortBy] =
//     useState<SortType>("duration");

//   /* =========================
//      COMPLETED
//   ========================= */

//   const [completedIds, setCompletedIds] =
//     useState<number[]>([]);

//   /* =========================
//      SORT TODAY'S PLAN
//   ========================= */

//   const sortedPlan = [...addPlain];

//   if (sortBy === "duration") {
//     sortedPlan.sort(
//       (a, b) =>
//         a.duration - b.duration
//     );
//   }

//   if (sortBy === "calories") {
//     sortedPlan.sort(
//       (a, b) =>
//         a.caloriesBurned -
//         b.caloriesBurned
//     );
//   }

//   if (sortBy === "rating") {
//     sortedPlan.sort(
//       (a, b) =>
//         b.rating - a.rating
//     );
//   }

//   /* =========================
//      SORT SAVED
//   ========================= */

//   const sortedSaved = [...saveGym];

//   if (sortBy === "duration") {
//     sortedSaved.sort(
//       (a, b) =>
//         a.duration - b.duration
//     );
//   }

//   if (sortBy === "calories") {
//     sortedSaved.sort(
//       (a, b) =>
//         a.caloriesBurned -
//         b.caloriesBurned
//     );
//   }

//   if (sortBy === "rating") {
//     sortedSaved.sort(
//       (a, b) =>
//         b.rating - a.rating
//     );
//   }

//   /* =========================
//      CURRENT DATA
//   ========================= */

//   let currentWorkouts = sortedPlan;

//   if (activeTab === "saved") {
//     currentWorkouts = sortedSaved;
//   }

//   /* =========================
//      METRICS
//   ========================= */

//   let totalExercises =
//     currentWorkouts.length;

//   let totalMinutes = 0;
//   let totalCalories = 0;

//   currentWorkouts.forEach(
//     (gym) => {
//       totalMinutes =
//         totalMinutes + gym.duration;

//       totalCalories =
//         totalCalories +
//         gym.caloriesBurned;
//     }
//   );

//   /* =========================
//      SORT LABEL
//   ========================= */

//   let sortLabel = "Duration";

//   if (sortBy === "calories") {
//     sortLabel = "Calories";
//   }

//   if (sortBy === "rating") {
//     sortLabel = "Rating";
//   }

//   /* =========================
//      SORT CHANGE
//   ========================= */

//   const handleSortChange = (
//     type: SortType
//   ) => {
//     setSortBy(type);
//   };

//   /* =========================
//      REMOVE PLAN
//   ========================= */

//   const handleRemovePlan = (
//     gym: IGym
//   ) => {
//     const newPlan = addPlain.filter(
//       (item) => item.id !== gym.id
//     );

//     setaddPlain(newPlan);

//     const newCompletedIds =
//       completedIds.filter(
//         (id) => id !== gym.id
//       );

//     setCompletedIds(
//       newCompletedIds
//     );

//     toast.success(
//       `${gym.name} removed from today's plan.`
//     );
//   };

//   /* =========================
//      REMOVE SAVED
//   ========================= */

//   const handleRemoveSaved = (
//     gym: IGym
//   ) => {
//     const newSaved = saveGym.filter(
//       (item) => item.id !== gym.id
//     );

//     setsaveGym(newSaved);

//     toast.success(
//       `${gym.name} removed from saved workouts.`
//     );
//   };

//   /* =========================
//      MARK AS DONE
//   ========================= */

//   const handleMarkAsDone = (
//     gym: IGym
//   ) => {
//     if (
//       completedIds.includes(gym.id)
//     ) {
//       toast.info(
//         `${gym.name} is already done.`
//       );

//       return;
//     }

//     const newCompletedIds = [
//       ...completedIds,
//       gym.id,
//     ];

//     setCompletedIds(
//       newCompletedIds
//     );

//     toast.success(
//       `${gym.name} marked as done.`
//     );
//   };

//   /* =========================
//      PLAN CARD
//   ========================= */

//   const PlanCard = ({
//     gym,
//     saved = false,
//   }: {
//     gym: IGym;
//     saved?: boolean;
//   }) => {
//     let isCompleted = false;

//     if (
//       completedIds.includes(gym.id)
//     ) {
//       isCompleted = true;
//     }

//     return (
//       <div
//         className={`border border-[#24272d] bg-[#15171c] transition-colors hover:border-[#353940] ${
//           isCompleted
//             ? "border-[#354000]"
//             : ""
//         }`}
//       >
//         <div className="flex flex-col gap-4 px-3.5 py-3 sm:flex-row sm:items-center">

//           {/* IMAGE */}

//           <div className="h-[90px] w-full shrink-0 overflow-hidden rounded-[7px] sm:w-[132px]">
//             <Image
//               src={gym.image}
//               alt={gym.name}
//               width={132}
//               height={90}
//               className="h-full w-full"
//             />
//           </div>

//           {/* INFO */}

//           <div className="min-w-0 flex-1">

//             <h2
//               className={`truncate text-[14px] font-black uppercase leading-[1.2] ${
//                 isCompleted
//                   ? "text-[#9ca86c]"
//                   : "text-white"
//               }`}
//             >
//               {gym.name}
//             </h2>

//             <p className="mt-1 truncate text-[9px] font-medium text-[#686b72]">
//               {gym.equipment}
//             </p>

//             <div className="my-3 h-px bg-[#24272d]" />

//             {/* STATS */}

//             <div className="flex items-center gap-4">

//               <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#858991]">
//                 <FiClock className="text-[12px] text-[#c8ff00]" />

//                 {gym.duration} min
//               </span>

//               <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#858991]">
//                 <IoFlameOutline className="text-[13px] text-[#c8ff00]" />

//                 {gym.caloriesBurned} kcal
//               </span>

//               <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#858991]">
//                 <FiStar className="text-[12px] text-[#c8ff00]" />

//                 {gym.rating}
//               </span>

//             </div>
//           </div>

//           {/* ACTIONS */}

//           <div className="flex shrink-0 items-center gap-2">

//             {/* VIEW DETAILS */}

//             <Link
//               href={`/workout/${gym.id}`}
//               className="flex h-[32px] items-center justify-center rounded-full border border-[#30333a] px-4 text-[9px] font-medium text-white transition hover:border-[#50545c] hover:bg-[#1b1e24]"
//             >
//               View Details
//             </Link>

//             {/* MARK AS DONE */}

//             {!saved && (
//               <button
//                 type="button"
//                 onClick={() =>
//                   handleMarkAsDone(
//                     gym
//                   )
//                 }
//                 disabled={isCompleted}
//                 className={`flex h-[32px] items-center gap-1.5 rounded-full px-4 text-[9px] font-bold transition ${
//                   isCompleted
//                     ? "cursor-default bg-[#354000] text-[#c8ff00]"
//                     : "cursor-pointer bg-[#c8ff00] text-[#090a0c] hover:bg-[#b8ee00]"
//                 }`}
//               >
//                 <FiCheck className="text-[12px]" />

//                 {isCompleted
//                   ? "Done"
//                   : "Mark as Done"}
//               </button>
//             )}

//             {/* REMOVE */}

//             <button
//               type="button"
//               onClick={() => {
//                 if (saved) {
//                   handleRemoveSaved(
//                     gym
//                   );
//                 } else {
//                   handleRemovePlan(
//                     gym
//                   );
//                 }
//               }}
//               aria-label={`Remove ${gym.name}`}
//               className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center text-[#686b72] transition hover:text-white"
//             >
//               <FiX className="text-[14px]" />
//             </button>

//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#090a0c] px-3 pb-0 pt-8 sm:px-6">

//       <div className="mx-auto w-full max-w-[1030px]">

//         {/* =========================
//             HEADER
//         ========================= */}

//         <div className="pb-5">

//           <h1 className="text-[25px] font-black uppercase leading-none tracking-[-0.02em] text-white sm:text-[27px]">
//             MY PLAN
//           </h1>

//           <p className="mt-2 text-[10px] text-[#777b83]">
//             Cap of five lifts for today.
//             Finish them, then load more.
//           </p>

//         </div>

//         {/* =========================
//             METRICS
//         ========================= */}

//         <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-[12px] border border-[#24272d] bg-[#15171c] sm:grid-cols-3">

//           {/* EXERCISES */}

//           <div className="px-5 py-5 sm:border-r sm:border-[#24272d]">

//             <p className="text-[9px] text-[#777b83]">
//               Exercises
//             </p>

//             <p className="mt-1 text-[28px] font-black leading-none text-[#c8ff00]">
//               {totalExercises}
//             </p>

//           </div>

//           {/* MINUTES */}

//           <div className="border-t border-[#24272d] px-5 py-5 sm:border-r sm:border-t-0">

//             <p className="text-[9px] text-[#777b83]">
//               Minutes
//             </p>

//             <p className="mt-1 text-[28px] font-black leading-none text-white">
//               {totalMinutes}
//             </p>

//           </div>

//           {/* CALORIES */}

//           <div className="border-t border-[#24272d] px-5 py-5 sm:border-t-0">

//             <p className="text-[9px] text-[#777b83]">
//               Calories
//             </p>

//             <p className="mt-1 text-[28px] font-black leading-none text-white">
//               {totalCalories}
//             </p>

//           </div>

//         </div>

//         {/* =========================
//             TAB + SORT
//         ========================= */}

//         <div className="mb-4 flex items-center justify-between gap-3">

//           {/* TABS */}

//           <div className="tabs tabs-box w-fit bg-transparent">

//             <button
//               type="button"
//               onClick={() =>
//                 setActiveTab("today")
//               }
//               className={`tab ${
//                 activeTab === "today"
//                   ? "tab-active"
//                   : ""
//               }`}
//             >
//               Today's Plan
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 setActiveTab("saved")
//               }
//               className={`tab ${
//                 activeTab === "saved"
//                   ? "tab-active"
//                   : ""
//               }`}
//             >
//               Saved
//             </button>

//           </div>

//           {/* SORT */}

//           <div className="flex shrink-0 items-center gap-2">

//             <span className="hidden text-[10px] text-[#777b83] sm:block">
//               Sort By
//             </span>

//             <div className="dropdown dropdown-end">

//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="flex h-[29px] cursor-pointer items-center gap-2 rounded-[9px] border border-[#30333a] bg-[#15171c] px-3 text-[9px] font-medium text-white"
//               >

//                 <span>
//                   {sortLabel}
//                 </span>

//                 <FiChevronDown className="text-[12px] text-[#777b83]" />

//               </div>

//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu z-[50] mt-1 w-[110px] rounded-[8px] border border-[#30333a] bg-[#15171c] p-1 shadow-lg"
//               >

//                 <li>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSortChange(
//                         "duration"
//                       )
//                     }
//                   >
//                     Duration
//                   </button>
//                 </li>

//                 <li>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSortChange(
//                         "calories"
//                       )
//                     }
//                   >
//                     Calories
//                   </button>
//                 </li>

//                 <li>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSortChange(
//                         "rating"
//                       )
//                     }
//                   >
//                     Rating
//                   </button>
//                 </li>

//               </ul>

//             </div>
//           </div>
//         </div>

//         {/* =========================
//             TODAY'S PLAN
//         ========================= */}

//         {activeTab === "today" && (
//           <div className="space-y-3">

//             {sortedPlan.length > 0 ? (
//               sortedPlan.map(
//                 (gym: IGym) => (
//                   <PlanCard
//                     key={gym.id}
//                     gym={gym}
//                   />
//                 )
//               )
//             ) : (
//               <EmptyState
//                 activeTab="today"
//               />
//             )}

//           </div>
//         )}

//         {/* =========================
//             SAVED
//         ========================= */}

//         {activeTab === "saved" && (
//           <div className="space-y-3">

//             {sortedSaved.length > 0 ? (
//               sortedSaved.map(
//                 (gym: IGym) => (
//                   <PlanCard
//                     key={gym.id}
//                     gym={gym}
//                     saved
//                   />
//                 )
//               )
//             ) : (
//               <EmptyState
//                 activeTab="saved"
//               />
//             )}

//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Myplain;