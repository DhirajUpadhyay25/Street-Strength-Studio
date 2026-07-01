import {
  Baby,
  Dumbbell,
  Heart,
  ShieldCheck,
  PersonStanding,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaWhatsapp
} from "react-icons/fa";

const ageGroups = [
  {
    age: "5 - 12 Years",
    title: "Kids",
    level: "Beginner",
    icon: Baby,
    color: "bg-green-100 text-green-700",
    description:
      "Develop coordination, flexibility, confidence, and healthy movement through fun bodyweight exercises.",
    exercises: [
      "Animal Walks",
      "Monkey Bars",
      "Bear Crawls",
      "Jumping",
      "Hanging",
      "Balance",
      "Mobility",
      "Light Squats",
    ],
  },
  {
    age: "13 - 18 Years",
    title: "Teenagers",
    level: "Beginner • Intermediate",
    icon: Activity,
    color: "bg-blue-100 text-blue-700",
    description:
      "Improve athletic performance, posture, discipline, strength, and endurance.",
    exercises: [
      "Push Ups",
      "Pull Ups",
      "Squats",
      "Dips",
      "Jump Rope",
      "Plank",
      "Stretching",
      "Handstand",
    ],
  },
  {
    age: "19 - 30 Years",
    title: "Young Adults",
    level: "Intermediate • Advanced",
    icon: Dumbbell,
    color: "bg-orange-100 text-orange-700",
    description:
      "Build maximum strength, muscle, endurance, and master advanced calisthenics skills.",
    exercises: [
      "Muscle Ups",
      "Front Lever",
      "Planche",
      "Handstand",
      "Pistol Squats",
      "Core Training",
      "HIIT",
      "Pull Ups",
    ],
  },
  {
    age: "31 - 45 Years",
    title: "Adults",
    level: "Beginner • Intermediate",
    icon: PersonStanding,
    color: "bg-purple-100 text-purple-700",
    description:
      "Stay fit, reduce stress, improve posture, and build lean muscle with sustainable training.",
    exercises: [
      "Push Ups",
      "Squats",
      "Walking",
      "Jogging",
      "Lunges",
      "Core Training",
      "Stretching",
      "Mobility",
    ],
  },
  {
    age: "46 - 55 Years",
    title: "Middle Age",
    level: "Beginner",
    icon: ShieldCheck,
    color: "bg-pink-100 text-pink-700",
    description:
      "Maintain joint health, flexibility, balance, and functional strength for everyday life.",
    exercises: [
      "Wall Push Ups",
      "Chair Squats",
      "Walking",
      "Resistance Bands",
      "Stretching",
      "Balance",
      "Plank",
      "Mobility",
    ],
  },
  {
    age: "56 - 65+ Years",
    title: "Seniors",
    level: "Beginner",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    description:
      "Improve mobility, independence, flexibility, and overall wellness with safe bodyweight movements.",
    exercises: [
      "Walking",
      "Chair Exercises",
      "Wall Push Ups",
      "Resistance Bands",
      "Yoga",
      "Stretching",
      "Balance",
      "Breathing",
    ],
  },
];

export default function AgeSection() {
  return (
    <section className="py-24 px-6  relative overflow-hidden bg-[#0A0A0A] min-h-screen flex items-center  ">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-lime-500 font-bold ">
            WHO CAN JOIN?
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-white text-orange-500 font-bold leading-tight">
            Calisthenics For <span className="text-orange-500">Every Age</span>
          </h2>

          <p className="max-w-3xl  max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
           " Whether you're just starting your fitness journey at age 5 or
            staying active after 65, our programs are carefully designed to
            improve strength, mobility, balance, flexibility, and confidence at
            every stage of life "
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 ">

          {ageGroups.map((group, index) => {

            const Icon = group.icon;

            return (

              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 overflow-hidden"
              >

                <div className="p-8">

                  {/* Top */}

                  <div className="flex justify-between items-center">

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${group.color}`}>

                      <Icon size={32} />

                    </div>

                    <span
                      className={`text-sm font-semibold px-4 py-2 rounded-full ${group.color}`}
                    >
                      {group.level}
                    </span>

                  </div>

                  {/* Age */}

                  <h3 className="text-3xl font-bold mt-2 text-gray-900">
                    {group.age}
                  </h3>

                  <h4 className="text-orange-500 font-semibold text-lg mt-1">
                    {group.title}
                  </h4>

                  {/* Description */}

                  <p className="text-gray-600 mt-2 leading-4">
                    {group.description}
                  </p>

                  {/* Divider */}

                  <div className="my-4 border-t"></div>

                  {/* Exercises */}

                  <h5 className="font-bold text-gray-900 mb-6">
                    Recommended Exercises
                  </h5>

                  <div className="flex flex-wrap gap-3">

                    {group.exercises.map((exercise, i) => (

                      <span
                        key={i}
                        className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-2 text-sm font-medium text-gray-700"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-lime-500"
                        />

                        {exercise}
                      </span>

                    ))}

                  </div>

                  {/* Button */}
                   
                              <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-60 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,23,53,0.55)] active:scale-90">
                               <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
                               <span>Start </span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
                               </a> 

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}