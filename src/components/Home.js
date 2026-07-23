import React from "react";
import { Play } from "lucide-react";
import { Dumbbell, ArrowRight } from "lucide-react";

import { Clock3, IndianRupee } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import AgeSection from "./AgeSection";


const Home = () => {
  const programs = [
  {
    title: "Calisthenics",
    image: "/imagess/program1.png",
    desc: "Master bodyweight strength, mobility and control.",
    price: 1499,
    time: "4 weeks"
  },
  {
    title: "Fat Loss",
    image: "/imagess/fatloss.png",
    desc: "Build explosive power with progressive training.",
     price: 1199,
    time: "4 weeks"
  },
  {
    title: "Female workout",
    image: "/imagess/jumba.png",
    desc: "Increase flexibility and prevent injuries.",
     price: 1199,
    time: "4 weeks"
  },
];
  return (
    <>
    <section className="mt-2 relative min-h-screen overflow-hidden flex items-center ">
      <div >

  {/* ================= Background Video ================= */}
  <div >
   <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover brightness-[1.5]">
    <source src="/videos/vv4.mp4" type="video/mp4" />
  
  </video>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Orange Gradient Glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[150px]" />
    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-orange-600/20 blur-[150px]" />
    <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-orange-400/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
  </div>

  {/* ================= Content ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

    <div className="grid lg:grid-cols-2 items-center gap-12">

      {/* LEFT */}
      <div>

        <span className="mt-20 inline-flex items-center px-5 py-2 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500 text-orange-400 text-sm font-medium tracking-widest uppercase">
          🔥Calisthenics workout
        </span>

        <h1 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight">
          BUILD
          <br />
          <span className="text-orange-500">
            REAL STRENGTH
          </span>
          <br />
          WITH YOUR
          <br />
          BODY.
        </h1>

        <p className="mt-4 text-gray-200 text-lg leading-8 max-w-xl">
          Train with experienced calisthenics coaches,
          improve mobility, master bodyweight skills,
          and become stronger every single day.
        </p>

        {/* Buttons */}
        <div className="mt-1 flex flex-wrap gap-5">

          <a
            href="https://wa.link/xsauiy"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-60 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-90"
          >
            <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
            <span>Start</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>

          <a
            href="https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-60 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-90"
          >
            <FaInstagram className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
            <Play size={18} />
            <span>Follow</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>

        </div>

        {/* Stats */}
       

      </div>

      {/* RIGHT */}

      <div className="hidden lg:flex justify-center relative">

        <div className="absolute w-[450px] h-[450px] rounded-full bg-orange-500/30 blur-[120px]" />

      

      </div>

    </div>

  </div>
  </div>
    </section>

        <AgeSection/>
        
  <section className="bg-black py-12 mt-0 w-100">
    
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Find Us
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          Visit The
          <span className="text-orange-500">
            {" "}Studio
          </span>
        </h2>

        <div className="mt-12 space-y-8">

          <div>
            <h4 className="text-white font-bold">
              📍 Address
            </h4>

            <p className="text-gray-400 mt-2">
             Shop no 3, First Floor, Gopi Colony, Old Faridabad
              <br />
              Faridabad, Haryana
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold">
              ⏰ Working Hours
            </h4>

            <h1 className="text-gray-400 mt-2">
              Mon - Sat : 6 AM - 9 AM Morning <br/>
              & 5 Pm - 9 PM Evening

              <br />
              Sunday : Closed
            </h1>
          </div>

        </div>

      </div>

      {/* Map */}

      <div className="overflow-hidden rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,.15)]">

        <iframe
          title="Google Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9310873275435!2d77.31538177529274!3d28.421336175780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd707738a871%3A0x452e25c7e43b4474!2sStreet%20strength%20studio!5e0!3m2!1sen!2sin!4v1782735953532!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen />

    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9310873275435!2d77.31538177529274!3d28.421336175780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd707738a871%3A0x452e25c7e43b4474!2sStreet%20strength%20studio!5e0!3m2!1sen!2sin!4v1782735953532!5m2!1sen!2sin"
     width="600" height="450" style="border:0;" 
    allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"/> */}



      </div>

    </div>

  </div>
</section>
    


      {/* program section here */}
    <section className="relative overflow-hidden bg-black py-24 text-white">

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[130px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="px-4 py-2 rounded-full border border-orange-500 text-orange-200 text-sm tracking-widest uppercase">
            Premium Training
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Explore Our Training <span className="text-orange-500">
              Programs
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            Improve strength, endurance and mobility with world-class
            calisthenics programs designed for every level.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((item, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-orange-500/60 hover:shadow-[0_0_50px_rgba(249,115,22,0.25)]"
            >

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt=""
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-5 left-5 rounded-full bg-orange-500 p-3">
                  <Dumbbell size={20} />
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>

<div className="flex justify-between items-center rounded-xl bg-zinc-900 border border-zinc-800 p-4 mt-5">

  <div className="flex items-center gap-2">
    <Clock3 className="text-orange-500" size={20} />
    <span className="text-gray-300 font-medium">
      {item.time}
    </span>
  </div>

  <div className="flex items-center gap-1">
    <IndianRupee className="text-orange-500" size={18} />
    <span className="text-2xl font-bold text-orange-500">
      {item.price}
    </span>
  </div>

</div>
     <div className="flex justify-between items-center">
                  
                   <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer">

                  <button className="mt-4 flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold transition hover:bg-orange-600">

                   Enroll Now

                  <ArrowRight size={18} />

                </button> </a>
                <a href="https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq" target="_blank" rel="noopener noreferrer">
       <button className="mt-4 flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600">

                  Learn More

                  <ArrowRight size={18} />

                </button> </a>
     </div>
               

              </div>
                   
            </div>
 
          ))}

        </div>
    
    <div className=" mt-20 text-center flex items-center justify-center ">
      <a href="/programs">
          <button className="group px-8 py-4  bg-orange-500 rounded-xl text-black font-bold flex items-center gap-3 hover:bg-green-400 duration-300">

                View All Programs

                <ArrowRight
                  className="group-hover:translate-x-1 duration-300"
                  size={20}
                />

              </button> </a>
              </div>
        {/* Stats */}



        {/* CTA */}


      </div>



    </section>
    <section className="relative overflow-hidden bg-black ">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[150px]" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Ready to Start Your
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Fitness Journey?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          Join hundreds of athletes who have transformed their bodies,
          built incredible strength, and achieved their fitness goals with
          our premium calisthenics programs.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                             <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer">

          
          <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
            Get Started
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button></a>
             
             <a href="/Contact">
          <button className="rounded-full border border-orange-500 px-8 py-4 text-lg font-semibold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white">
            Contact Us
          </button> </a>
        </div>

        {/* Stats */}
        <div className="mt-16 mb-10  grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">50+</h3>
            <p className="mt-2 text-gray-400">Members</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">20+</h3>
            <p className="mt-2 text-gray-400">Programs</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">96%</h3>
            <p className="mt-2 text-gray-400">Success Rate</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
            <p className="mt-2 text-gray-400">Support</p>
          </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">6 Days</h3>
            <p className="mt-2 text-gray-400">Opens</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">6-9 Am</h3>
            <p className="mt-2 text-gray-400">Morning Time</p>
          </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">5-10 pm</h3>
            <p className="mt-2 text-gray-400">Evening Time</p>
          </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-orange-500">5+</h3>
            <p className="mt-2 text-gray-400">Coaches</p>
          </div>
          
        </div>
      </div>
    </section>
</>
 );
 

};

export default Home;