import { useState } from "react";
export default function Pricing() {
  const plans = {
  Monthly: {
    price: "₹899",
    duration: "30 Days",
  },
  Quaterly: {
    price: "₹2499",
    duration: "90 Days",
  },
  Yearly: {
    price: "₹9999",
    duration: "365 Days",
  },
};
  const [active, setActive] = useState("Quaterly");

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-orange-500 uppercase tracking-[4px] text-center">
          Membership Plans
        </p>

        <h2 className="text-5xl font-black text-center mt-4">
          Choose Your <span className="text-orange-500">Plan</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mt-12">
          <div className="bg-zinc-900 rounded-full p-2 flex gap-2 border border-orange-500/20">
            {Object.keys(plans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActive(plan)}
                className={`px-8 py-3 rounded-full transition ${
                  active === plan
                    ? "bg-orange-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="mt-16 max-w-lg mx-auto rounded-3xl bg-zinc-900 border border-orange-500/20 p-10 shadow-[0_0_40px_rgba(249,115,22,.15)]">

          <h3 className="text-3xl font-bold">{active} Plan</h3>

          <p className="text-gray-400 mt-2">
            Perfect for beginners and advanced athletes.
          </p>

          <h1 className="text-6xl font-black text-orange-500 mt-8">
            {plans[active].price}
          </h1>

          <p className="text-gray-500 mt-2">
            {plans[active].duration}
          </p>

          <ul className="space-y-4 mt-10 text-gray-300">
            <li>✔ Personal Training Plan</li>
            <li>✔ In Room Competition</li>
            <li>✔ Nutrition Guide</li>
            <li>✔ Weekly Progress Tracking</li>
            <li>✔ Community Access</li>
            <li>✔ GAmes and Challenges </li>
          </ul>

          <button className="w-full mt-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-bold hover:scale-105 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}