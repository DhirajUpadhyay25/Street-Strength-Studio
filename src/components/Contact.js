import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
  ArrowRight
  

 
} from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 9654563119",
    color: "text-orange-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hiteshofficial010@gmail.com",
    color: "text-cyan-400",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Shop no 3, First Floor, Gopi Colony, Sec-19, Old Faridabad",
    color: "text-red-400",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "Mon - Sat | 6AM - 9PM",
    color: "text-green-400",
  },
];

const socials = [
  {
    icon: FaInstagram,
    title: "Instagram",
    username: "@DR_SS_STUDIO",
    gradient: "from-pink-500 via-fuchsia-500 to-orange-500",
  },

  {
    icon: FaInstagram,
    title: "Instagram",
    username: "@HITEN_CALISTHENICS",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function Contact() {
  return (
    <>
    <section className="relative overflow-hidden bg-black py-24">

      {/* Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-[6px] font-semibold">
            Contact Me Here
          </span>

          <h2 className="mt-4 text-5xl md:text-7xl font-black text-white">

            Let's Build

            <br />

            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">

             Together with passion.

            </span>

          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-8">
            Have questions? Want personal coaching?
            Let's connect and start your transformation.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {contactInfo.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8 hover:border-orange-500 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(249,115,22,.25)]"
              >

                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="flex justify-between items-center">

                  <div className="flex gap-5">

                    <div className="h-16 w-16 rounded-2xl bg-white/5 border border-orange-500/20 flex items-center justify-center">

                      <Icon className={`${item.color}`} size={28} />

                    </div>

                    <div>

                      <p className="uppercase text-xs tracking-[3px] text-gray-500">

                        {item.title}

                      </p>

                      <h3 className="mt-2 font-semibold text-white text-sm">

                        {item.value}

                      </h3>

                    </div>

                  </div>

                  <ArrowUpRight className="text-gray-500 group-hover:text-orange-500 group-hover:rotate-45 transition" />

                </div>

              </div>

            );

          })}

        </div>

        {/* Social */}

        <div className="mt-12">
           <h2 className="text-4xl font-black text-white mb-10"> Follow My Journey  </h2>
           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <a href="https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq"  key={index} target="_new" className={`group rounded-3xl bg-gradient-to-r ${item.gradient} p-6 transition duration-500 hover:scale-105 hover:-translate-y-2`} >
                <div className="flex justify-between">
                <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xl">
                <Icon size={28} />
                </div>
                <ArrowUpRight className="group-hover:rotate-45 transition" /> </div>
                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mt-2">
                    {item.username} </p> </a>  );  })}
                  
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-20"> 
          <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 p-6 transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,.45)]">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="flex justify-between items-start">
          <div className="h-16 w-16 rounded-2xl bg-orange/20 backdrop-blur-xl flex items-center justify-center">
           <FaWhatsapp className="text-white text-4xl" />
           </div>
           <ArrowUpRight  size={28}  className="text-white transition duration-300 group-hover:rotate-45"/>
         </div>
          <div className="mt-5">
          <h3 className="text-3xl font-bold text-white"> WhatsApp</h3>
          <p className="mt-1 text-green-100"> +91 9654563119</p>
         <div className="mt-2 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
          Chat Now →  </div>
         </div>
         </a>
         </div>

        </div>

        

        {/* CTA */}

        <div className="mt-24 rounded-[40px] border border-orange-500/20 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black p-12 text-center">

          <h2 className="text-5xl font-black text-white">

            Ready to Start?

          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">

            Join hundreds of athletes transforming their bodies through
            structured calisthenics coaching.

          </p>
          <div>
              <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-60 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95">
              <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
              <span>Join Now</span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
             </a> 
            </div>


        </div>

      </div>

    </section>




  <section className="bg-black py-24">
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
              & 5 PP - 9 PM Evening

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
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen />
      </div>

    </div>

  </div>
</section>
    </>
  );
}