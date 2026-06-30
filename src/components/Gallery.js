import { ImageIcon } from "lucide-react";
import { Play, Eye, Heart } from "lucide-react";

const gallery = [
  {
    id: 1,
    image: "/imagess/program1.png",
    title: "Muscle Up Training",
    className: "md:row-span-2",
  },
  {
    id: 2,
    image: "/images/gallery2.jpg",
    title: "Morning Workout",
  },
  {
    id: 3,
    image: "/images/gallery3.jpg",
    title: "Group Session",
  },
  {
    id: 4,
    image: "/imagess/gallery4.jpg",
    title: "Calisthenics",
    className: "md:row-span-2",
  },
  {
    id: 5,
    image: "/images/gallery5.jpg",
    title: "Gym Interior",
  },
  {
    id: 6,
    image: "/images/gallery6.jpg",
    title: "Handstand Practice",
  },
];
const reels = [
  {
    id: 1,
    image: "/imagess/program1.png",
    title: "Muscle Up Tutorial",
    views: "2.4M",
    likes: "156K",
    badge: "Trending",
    
  },
  {
    id: 2,
    image: "/images/reel2.jpg",
    title: "Handstand Progress",
    views: "980K",
    likes: "84K",
    badge: "Popular",
  },
  {
    id: 3,
    image: "/images/reel3.jpg",
    title: "Front Lever",
    views: "1.7M",
    likes: "121K",
    badge: "Viral",
  },
  {
    id: 4,
    image: "/images/reel4.jpg",
    title: "Planche Journey",
    views: "3.1M",
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

              <img
                src={item.image}
                alt=""
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
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

                <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 font-semibold text-white transition hover:scale-105">

                  Watch Reel

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
   
    </>


  );
}