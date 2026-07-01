import { ImageIcon } from "lucide-react";
import { Play, Eye, Heart } from "lucide-react";
import { ArrowRight } from "lucide-react";

import {
  FaInstagram

} from "react-icons/fa";

const gallery = [
  {
    id: 1,
    image: "/imagess/g8.jpeg",
    title: "Studio",
    className: "md:row-span-2",
  },
  {
    id: 2,
    image: "/imagess/g2.png",
    title: "Morning Workout",
  },
  {
    id: 3,
    image: "/imagess/g3.png",
    title: "Group Session",
  },
  {
    id: 4,
    image: "/imagess/g4.png",
    title: "Calisthenics",
    className: "md:row-span-2",
  },
  {
    id: 5,
    image: "/imagess/g5.png",
    title: " Equipment ",
  },
  {
    id: 6,
    image: "/imagess/g6.png",
    title: "Handstand Practice",
  },
];
const reels = [
  {
    id: 1,
    video: "/videos/v2.mp4",
    title: "Balance",
    views: "10.5M",
    likes: "186K",
    badge: "Popular",
    
  },
  {
    id: 2,
    video: "/videos/v1.mp4",
    title: "Studio",
    views: "50k",
    likes: "2k",
    badge: "Trending",
  },
  {
    id: 3,
    video: "/videos/v3.mp4",
    title: "Rope Climbing",
    views: "10.7M",
    likes: "121K",
    badge: "Viral",
  },
  {
    id: 4,
 video: "/videos/v4.mp4",
     title: "Handstand Walk",
    views: "11.1M",
    likes: "205K",
    badge: "Featured",
  },
];

export default function Gallery() {
  return (
    <>
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-orange-500 font-semibold">
            Studio Gallery
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">

            Life At

            <span className=" text-orange-500">
              {" "}SS STUDIO
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400">
            Experience our training environment, premium Training,
            and unforgettable community moments and Beginner to Advance Journey.
          </p> 

        </div>

        {/* Gallery */}

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">

          {gallery.map((item) => (

            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl ${item.className || ""}`}
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" />

              {/* Orange Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-orange-500/40 via-transparent to-transparent transition duration-500" />

              {/* Content */}

              <div className="absolute bottom-0 left-0 p-6 translate-y-10 group-hover:translate-y-0 transition duration-500">

                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-4">

                  <ImageIcon className="text-white" />

                </div>

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition duration-500">

                  Premium calisthenics training environment.

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>


<section className="relative overflow-hidden bg-black py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-orange-500 font-semibold">
            Viral Content
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">

            Training
            <span className="text-orange-500"> Reels</span>

          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Watch short workouts, tutorials and viral calisthenics moments.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reels.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-zinc-800 hover:border-orange-500 transition duration-500 hover:-translate-y-3"
            >

            <video
  src={item.video}
  className="h-[520px] w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
/>
              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

              {/* Badge */}

              <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">

                {item.badge}

              </div>

              {/* Play Button */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/90 backdrop-blur-lg transition duration-300 group-hover:scale-110">

                  <Play
                    fill="white"
                    size={34}
                    className="ml-1 text-white"
                  />

                </div>

              </div>

              {/* Bottom */}

              <div className="absolute bottom-0 w-full p-6">

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <div className="mt-4 flex justify-between">

                  <div className="flex items-center gap-2 text-gray-300">

                    <Eye size={18} />

                    {item.views}

                  </div>

                  <div className="flex items-center gap-2 text-red-400">

                    <Heart
                      fill="currentColor"
                      size={18}
                    />

                    {item.likes}

                  </div>

                </div>

              
            <a href="https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-60 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,23,53,0.55)] active:scale-90">
              <FaInstagram className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
              <Play size={18} />
              <span>watch reel </span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
              </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
   
    </>


  );
}