import { Award, Trophy, Users, Star, Quote } from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "1000+",
    title: "Happy Students",
  },
  {
    icon: Trophy,
    number: "120+",
    title: "Transformations",
  },
  {
    icon: Star,
    number: "4.9",
    title: "Average Rating",
  },
  {
    icon: Award,
    number: "8+",
    title: "Years Experience",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "Muscle-Up Student",
    image: "/images/client1.jpg",
    review:
      "The best calisthenics coach I've trained with. The structured programs helped me achieve my first muscle-up in just six weeks.",
  },
  {
    name: "Emma Wilson",
    role: "Online Coaching",
    image: "/images/client2.jpg",
    review:
      "Professional coaching, excellent support and amazing community. Highly recommended for every fitness level.",
  },
];

export default function AchievementSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Orange Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-orange-500">
            Success Stories
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Our
            <span className="text-orange-500">
              {" "}Achievements
            </span>
          </h2>

        </div>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {achievements.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-center hover:border-orange-500 transition hover:-translate-y-3"
              >

                <div className="mx-auto w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center">

                  <Icon className="text-orange-500" size={38} />

                </div>

                <h2 className="text-5xl font-black text-white mt-6">

                  {item.number}

                </h2>

                <p className="text-gray-400 mt-3">

                  {item.title}

                </p>

              </div>

            );

          })}

        </div>

        {/* Testimonials */}

        <div className="mt-24">

          <div className="text-center">

            <span className="uppercase tracking-[6px] text-orange-500">
              Testimonials
            </span>

            <h2 className="text-5xl font-black text-white mt-5">
              What Clients
              <span className="text-orange-500">
                {" "}Say
              </span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-8 hover:border-orange-500 transition"
              >

                <Quote
                  className="absolute top-6 right-6 text-orange-500/30"
                  size={60}
                />

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-20 rounded-full object-cover border-2 border-orange-500"
                  />

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      {item.name}

                    </h3>

                    <p className="text-gray-400">

                      {item.role}

                    </p>

                  </div>

                </div>

                <div className="flex gap-1 mt-6">

                  {[1,2,3,4,5].map((star)=>(
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}

                </div>

                <p className="text-gray-300 leading-8 mt-6">

                  "{item.review}"

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}