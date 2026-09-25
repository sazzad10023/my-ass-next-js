// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import workoutImage from "@/assets/banner.png";

// const Bannar = () => {
//   return (
//     <section className="px-4 pt-6 sm:px-6 lg:px-8">
//       <div className=" container mx-auto flex min-h-[72px]  max-w-[1240px]  items-center overflow-hidden  rounded-2xl border border-zinc-800 bg-[#15161b]">
        
//         {/* Left Content */}
//         <div className="relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:px-12">
          
//           {/* Eyebrow */}
//           <p className="mb-4 text-[8px] font-black tracking-[0.12em] text-[#ccff00] sm:text-[9px]">
//             WORKOUT LIBRARY
//           </p>

//           {/* Heading */}
//           <h1 className="max-w-[520px] text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-5xl lg:text-[52px]">
//             TRAIN WITH INTENT.LOG
//             <br />
//             EVERY SET.
//           </h1>

//           {/* Description */}
//           <p className="mt-5 max-w-[430px] text-[10px] leading-[1.6] text-zinc-400 sm:text-[11px]">
//             FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
//             <br />
//             into today&apos;s plan, and watch the week&apos;s work add up.
//           </p>

//           {/* CTA */}
//           <div className="mt-6">
//             <Link
//               href="#library"
//               className="inline-flex items-center bg-[#ccff00] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#d9ff4d]"
//             >
//               Browse Workouts
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative hidden h-[340px] w-1/2 items-end justify-center lg:flex">
//           <Image
//             src={workoutImage}
//             alt="Workout illustration"
//             priority
//             className="h-full w-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Bannar;