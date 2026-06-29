import { useState } from "react";
import { Clock3, PlayCircle, Star } from "lucide-react";
import ProgramModal from "./ProgramModal";

export default function Programs() {
const [tab, setTab] = useState("Beginner");
const [openModal, setOpenModal] = useState(false);
const [selectedProgram, setSelectedProgram] = useState(null);
const data = {
  Beginner: [
    {
      id: 1,
      title: "Push-Up Mastery",
      image: "/imagess/program1.png",
      video: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      duration: "4 Weeks",
      price: "₹499",
      level: "Beginner",
      description:
        "Learn proper push-up form, strength progression and endurance."
    },
    {
      id: 2,
      title: "Pull-Up Basics",
      image: "/images/pullup.jpg",
      video: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
      duration: "6 Weeks",
      price: "₹699",
      level: "Beginner",
      description:
        "Build your first pull-up with progressive exercises."
    }
  ],

  Intermediate: [
    {
      id: 3,
      title: "Muscle-Up",
      image: "/images/muscleup.jpg",
      video: "https://www.youtube.com/watch?v=4Ww2M3jv0jE",
      duration: "8 Weeks",
      price: "₹999",
      level: "Intermediate",
      description:
        "Master the muscle-up with explosive pulling power."
    }
  ],

  Advanced: [
    {
      id: 4,
      title: "Planche",
      image: "/images/planche.jpg",
      video: "https://www.youtube.com/watch?v=yourvideo",
      duration: "12 Weeks",
      price: "₹1499",
      level: "Advanced",
      description:
        "Advanced planche strength program."
    }
  ]
};

  return (
    <>
    <section className="bg-black py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-500 tracking-[5px] uppercase font-semibold">
            Programs
          </span>

          <h2 className="text-5xl font-black mt-3">
            Choose Your
            <span className="text-orange-500"> Training</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Start from your current level and progress step by step with
            structured calisthenics programs.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center mt-14">

          <div className="bg-zinc-900 rounded-full p-2 flex gap-3 border border-orange-500/20">

            {["Beginner","Intermediate","Advanced"].map((item)=>(
              <button
                key={item}
                onClick={()=>setTab(item)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  tab===item
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40"
                  : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {data[tab].map((course,index)=>(
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(249,115,22,.25)]"
            >

              <div className="relative overflow-hidden">

                <img
                  src={course.image}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>

                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                  <PlayCircle onClick={()=>{
setSelectedProgram(course);
setOpenModal(true);
}}
                    size={70}
                    className="text-orange-500"
                  />

                </button>

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <span className="bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-sm">

                    {course.level}

                  </span>

                  <div className="flex items-center gap-1 text-yellow-400">

                    <Star fill="currentColor" size={16}/>

                    <span>4.9</span>

                  </div>

                </div>

                <h3 className="text-2xl font-bold mt-5">

                  {course.title}

                </h3>

                <p className="text-gray-400 mt-4">
                  Learn step-by-step with structured workouts,
                  videos and progression guides.
                </p>

                <div className="flex justify-between mt-6">

                  <div className="flex items-center gap-2 text-gray-400">

                    <Clock3 size={18}/>

                    {course.duration}

                  </div>

                  <span className="text-2xl font-bold text-orange-500">

                    {course.price}

                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                 <button
onClick={()=>{
setSelectedProgram(course);
setOpenModal(true);
}}
className="border border-orange-500 text-orange-500 rounded-xl py-3 hover:bg-orange-500 hover:text-white transition"
>
Preview
</button>

                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl py-3 font-semibold hover:scale-105 transition">

                    Enroll

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
    <ProgramModal

open={openModal}

program={selectedProgram}

onClose={()=>setOpenModal(false)}

/>
</>
  );
}