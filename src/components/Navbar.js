import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
         <Link to="/" className="flex items-center gap-3">
         <img src="/imagess/logo.png" alt="Logo" className="w-10 h-10 object-contain"/>
          <h1 className="text-ml font-black text-white">
          STREET STRENGTH <br/><span className="text-orange-400">STUDIO</span>
          </h1>
          </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative uppercase text-sm tracking-[3px] transition-all duration-300
                    ${
                      isActive
                        ? "text-lime-400"
                        : "text-white hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}

                  <span
                    className="
                    absolute left-0 -bottom-2
                    h-[2px] w-0
                    bg-lime-400
                    transition-all duration-300
                    group-hover:w-full"
                  ></span>
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block mb-6 ">
              <a href="https://wa.link/xsauiy" target="_blank" rel="noopener noreferrer"className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95">
              <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
              <span>Join Now</span><ArrowRight size={20}  className="transition-transform duration-300 group-hover:translate-x-2"/>
             </a> 
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={32} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-[100] transition-all duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-neutral-800">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}>
         <img src="/imagess/logo.png" alt="Logo" className="w-10 h-10 object-contain"/>
          <h1 className="text-ml font-black text-white">
          STREET STRENGTH <br/><span className="text-orange-400">STUDIO</span>
          </h1>
           
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col px-6 pt-10 gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `uppercase text-xl tracking-[4px] relative w-fit
                ${
                  isActive
                    ? "text-lime-400"
                    : "text-white hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
       
       <a
  href="https://wa.link/xsauiy"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 px-8 py-4 font-bold uppercase tracking-[3px] text-black shadow-[0_10px_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(163,230,53,0.55)] active:scale-95"
>
  <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-12" />

  <span>Join Now</span>

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</a>
      
          {/* <button className="mt-8 bg-lime-400 text-black py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition">
            <a href="https://wa.link/xsauiy" target="_new"> Join Now
            <ArrowRight size={18} />  </a>
          </button> */}
     <div className="overflow-hidden rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,.15)]">

        <iframe
          title="Google Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9310873275435!2d77.31538177529274!3d28.421336175780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd707738a871%3A0x452e25c7e43b4474!2sStreet%20strength%20studio!5e0!3m2!1sen!2sin!4v1782735953532!5m2!1sen!2sin"
          width="100%"
          height="100"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen /> </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;