import { useState } from "react";
import { Clock3, PlayCircle, Star } from "lucide-react";
import ProgramModal from "./ProgramModal";
import {
  ArrowRight
} from "lucide-react";
import {
  FaWhatsapp
} from "react-icons/fa";


export default function Programs() {
const [tab, setTab] = useState("Beginner");
const [openModal, setOpenModal] = useState(false);
const [selectedProgram, setSelectedProgram] = useState(null);
const data = {
  Beginner: [
    {
      id: 1,
      title: "Calisthenics Basics",
      image: "/imagess/b1.png",
      video: "https://www.instagram.com/reel/DUqVjTdE-ES/?igsh=d3RqbDg4cmEzbTM1",
      duration: "4 Weeks",
      price: "₹999",
      level: "Beginner",
      description:
        "Learn proper push-up form, strength progression and endurance."
    },
    {
      id: 2,
      title: "HandStand Basics",
      image: "/imagess/b2.1.jpeg",
      video: "https://www.instagram.com/reel/DUc4oa6k-7J/?igsh=bDE5Yzlld3F0NDZz",
      duration: "6 Weeks",
      price: "₹999",
      level: "Beginner",
      description:
        "develops strength, flexibility, balance, and coordination."
    },
     {
      id: 3,
      title: "Kick up and pull up",
      image: "/imagess/b2.png",
      video: "https://www.instagram.com/reel/DZaN32JJxDL/?igsh=djV1ZXRxcGF1a3l5",
      duration: "6 Weeks",
      price: "₹999",
      level: "Beginner",
      description:
        "Dead Hang & Hollow Body Hold."
    },
    
  ],

  Intermediate: [
    {
      id: 4,
      title: "Muscle-Up",
      image: "/imagess/i1.png",
      video: "https://www.instagram.com/reel/DVFQ9ork3x8/?igsh=MnVreDdlNmV5M2Zx",
      duration: "8 Weeks",
      price: "₹1299",
      level: "Intermediate",
      description:
        "Master the muscle-up with explosive pulling power."
    },
     {
      id: 5,
      title: "Back lever",
      image: "/imagess/i2.png",
      video: "https://www.instagram.com/reel/DVFQ9ork3x8/?igsh=MnVreDdlNmV5M2Zx",
      duration: "8 Weeks",
      price: "₹1199",
      level: "Intermediate",
      description:
        "Master the Back lever with explosive pulling power."
    }, {
      id: 6,
      title: "Finger pushups",
      image: "/imagess/i3.jpeg",
      video: "https://www.instagram.com/reel/DUVesl3k5lu/?igsh=MWI0MmFpczJueXdyMA==",
      duration: "8 Weeks",
      price: "₹1199",
      level: "Intermediate",
      description:
        "Finger push up with the push up to enhance explosive pulling power of fingers."
    }
  ],

  Advanced: [
    {
      id: 7,
      title: "Planche",
      image: "/imagess/b2.png",
      video: "https://www.instagram.com/reel/DVFQ9ork3x8/?igsh=MnVreDdlNmV5M2Zx",
      duration: "8 Weeks",
      price: "₹1599",
      level: "Advanced",
      description:
        "Advanced planche strength program."
    },
     {
      id: 8,
      title: "Muscle-up",
      image: "/imagess/b2.1.jpeg",
      video: "https://www.instagram.com/reel/DVFQ9ork3x8/?igsh=MnVreDdlNmV5M2Zx",
      duration: "12 Weeks",
      price: "₹1899",
      level: "Advanced",
      description:
        "Advanced planche strength program."
    },  {
      id: 9,
      title: "pro Athlete",
      image: "/imagess/b3.png",
      video: "https://www.instagram.com/reel/DVFQ9ork3x8/?igsh=MnVreDdlNmV5M2Zx",
      duration: "12 Weeks",
      price: "₹2499",
      level: "Advanced",
      description:
        "Advanced calisthenics strength program."
    }
  ]
};

  return (
    <>
    <section className=" relative bg-black py-28 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-4">

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

        <div className="flex justify-center mx-auto max-w-2xl mt-10">

          <div className="bg-zinc-900 rounded-full p-3 flex gap-2 border border-orange-500/20">

            {["Beginner","Intermediate","Advanced"].map((item)=>(
              <button
                key={item}
                onClick={()=>setTab(item)}
                className={`px-5 py-3 rounded-full font-semibold transition-all duration-300
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
                    className="text-orange-500"/>    
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

                <div className="flex text-center gap-1">
                 <button onClick={()=>{setSelectedProgram(course);setOpenModal(true);}}
                 className="group mt-8 inline-flex w-40 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-400 via-lime-500 to-orange-500 px-4 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all 
                 duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95">
                 Preview
                 </button>

               <button>
              <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-40 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-4 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95">
              <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
              <span>Enroll</span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
             </a> 
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