import { X, Clock3, Star, PlayCircle, CheckCircle } from "lucide-react";
// import ReactPlayer from "react-player";
import { InstagramEmbed } from "react-social-media-embed";

import {
  ArrowRight
} from "lucide-react";
import {
  FaWhatsapp
} from "react-icons/fa";

export default function ProgramModal({ open, onClose, program }) {
  if (!open || !program) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-5">

      <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-3xl border border-orange-500/20 bg-zinc-950">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-zinc-300 p-3 rounded-full hover:bg-orange-500 transition"
        >
          <X />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div>

          
<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
    <InstagramEmbed
      url={program.video}
      width="100%"
    />
 
</div>

            <div className="p-8">

              <h2 className="text-4xl font-black text-white">
                {program.title}
              </h2>

              <p className="text-gray-400 mt-5 leading-8">
                {program.description}
              </p>

              <div className="flex gap-6 mt-8">

                <div className="flex items-center gap-2 text-orange-500">
                  <Clock3 size={18} />
                  {program.duration}
                </div>

                <div className="flex items-center gap-2 text-yellow-400">
                  <Star fill="currentColor" size={18} />
                  4.9
                </div>

                <div className="text-green-400">
                  {program.level}
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="p-8 border-l border-zinc-800">

            <h3 className="text-white text-2xl font-bold">
              Course Curriculum
            </h3>

            <div className="space-y-4 mt-8">

              {[
                "Week 1 - Foundation",
                "Week 2 - Strength",
                "Week 3 - Pull Training",
                "Week 4 - Push Training",
                "Week 5 - Skill Progression",
                "Week 6 - Mobility",
                "Week 7 - Advanced Skills",
                "Week 8 - Final Challenge"
              ].map((week) => (

                <div
                  key={week}
                  className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4"
                >
                  <PlayCircle className="text-orange-500" />
                  <span className="text-gray-300">
                    {week}
                  </span>
                </div>

              ))}

            </div>

            {/* Skills */}

            <div className="mt-10">

              <h3 className="text-white text-xl font-bold">
                Skills You'll Learn
              </h3>

              <div className="grid grid-cols-2 gap-3 mt-5">

                {[
                  "Pull Ups",
                  "Push Ups",
                  "Muscle Up",
                  "Handstand",
                  "Core Strength",
                  "Mobility"
                ].map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-3"
                  >

                    <CheckCircle
                      size={18}
                      className="text-orange-500"
                    />

                    <span className="text-gray-300">
                      {skill}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Coach */}

            <div className="mt-10 rounded-2xl bg-zinc-900 p-5">

              <div className="flex gap-4 items-center">

                <img
                  src="/imagess/about.jpeg"
                  className="w-16 h-16 rounded-full object-cover"
                  alt=""
                />

                <div>

                  <h4 className="text-white font-bold">
                   Hitesh 
                  </h4>

                  <p className="text-gray-400">
                    Calisthenics Coach
                  </p>

                </div>

              </div>

            </div>

            {/* Certificate */}

            {/* <div className="mt-8 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5">

              <div className="flex gap-3">

                <Award className="text-orange-500" />

                <div>

                  <h4 className="text-white font-bold">
                    Certificate Included
                  </h4>

                  <p className="text-gray-400 text-sm mt-2">
                    Receive a certificate after successfully
                    completing the program.
                  </p>

                </div>

              </div>

            </div> */}

            {/* Review */}

            <div className="mt-8 bg-zinc-900 rounded-2xl p-5">

              <div className="flex items-center gap-2">

                <Star
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="text-white font-bold">
                  4.9 / 5
                </span>

              </div>

              <p className="text-gray-400 mt-3">
                "One of the best calisthenics programs I've ever
                followed. Highly recommended!"
              </p>

            </div>

            {/* Price */}

            <div className="mt-10 flex justify-between items-center">

              <div>

                <p className="text-gray-400">
                  Price
                </p>

                <h2 className="text-4xl font-black text-orange-500">
                  ₹999
                </h2>

              </div>

             <button>
              <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-40 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95">
              <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
              <span>BUY</span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
             </a> 
            </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}