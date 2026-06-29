import { Award, Users, Flame } from "lucide-react";
import {
  Target,
  Heart,
  Zap,
  
} from "lucide-react";


const About = () => {
  const values = [
  {
    icon: <Target size={42} />,
    title: "Goal-Oriented",
    description:
      "Every workout is designed with clear milestones to help you achieve lasting results.",
  },
  {
    icon: <Heart size={42} />,
    title: "Passion Driven",
    description:
      "Fitness isn't just my profession—it's my passion and way of life.",
  },
  {
    icon: <Zap size={42} />,
    title: "Results Focused",
    description:
      "Science-backed training methods that deliver measurable progress.",
  },
  {
    icon: <Award size={42} />,
    title: "Expert Guidance",
    description:
      "Years of coaching experience helping people unlock their true potential.",
  },
];
  return (
    <>
    <section className="relative overflow-hidden bg-black py-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
            🔥 My Story
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            About
            <span className="block text-orange-500">
              Your Trainer
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative group">

            {/* Orange Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-3xl group-hover:bg-orange-500/30 transition duration-500"></div>

            <div className="relative overflow-hidden rounded-3xl border border-orange-500/20">

              <img
                src="/imagess/about.jpeg"
                alt=""
                className="w-full h-[650px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">

              Transforming Lives Through
              <span className="text-orange-500">
                {" "}Calisthenics
              </span>

            </h3>

            <p className="mt-8 text-gray-400 leading-8">

              Hi, I'm <span className="text-orange-400 font-semibold">Hitesh Raj Upadhyay</span>,
              a passionate calisthenics athlete and fitness coach dedicated to
              helping people become stronger, healthier, and more confident.

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              Over the years I've helped beginners build their first pull-up,
              muscle-up, handstand, and advanced bodyweight skills through
              structured training and personalized coaching.

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              My philosophy is simple:
              <span className="text-white font-semibold">
                {" "}Consistency beats motivation.
              </span>
              Every workout brings you one step closer to your strongest self.

            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                <Award className="mx-auto text-orange-500" />

                <h3 className="text-3xl font-bold text-white mt-3">
                  3+
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Years
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                <Users className="mx-auto text-orange-500" />

                <h3 className="text-3xl font-bold text-white mt-3">
                  50+
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Clients
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                <Flame className="mx-auto text-orange-500" />

                <h3 className="text-3xl font-bold text-white mt-3">
                  100%
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Passion
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:scale-105 transition">

                Start Training

              </button>

              <button className="px-8 py-4 rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
 


 <section className="relative bg-black py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            WHY CHOOSE ME
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            My Core
            <span className="text-orange-500"> Values</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            My coaching philosophy is built around discipline,
            consistency and helping every athlete become stronger.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-orange-500/20 bg-zinc-900/60 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-500">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mt-4 text-gray-400 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>

 

</>



  );
};

export default About;