import { Dumbbell } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Dumbbell className="text-orange-500" size={30} />
              <h2 className="text-3xl font-bold text-white">
               Street Strength <span className="text-orange-500">Studio</span>
              </h2>
            </div>

            <p className="leading-7">
              Transform your body with professional calisthenics training and
              personalized workout programs.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-5">
              PROGRAMS
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="/Programs" className="hover:text-orange-500">
                  Beginner
                </a>
              </li>

              <li>
                <a href="/Programs" className="hover:text-orange-500">
                  Intermediate
                </a>
              </li>

              <li>
                <a href="/Programs" className="hover:text-orange-500">
                  Advanced
                </a>
              </li>

              <li>
                <a href="/Contact" className="hover:text-orange-500">
                  Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-5">
              CONTACT
            </h3>

            <p className="mb-2">📧 hiteshofficial010@gmail.com</p>
            <p className="mb-2">📞 +91 9654563119 </p>
            <p>📍 Sec-19 Faridabad, India</p>

              <div className="flex gap-10 mt-10">
          <a href="https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaInstagram size={30} /></a>
          <a href="https://www.instagram.com/hiten_calisthenics?igsh=MWpjdGlhYmFjeWZxNg==" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaFacebookF size={30} /></a>
          <a href="https://wa.link/xsauiy" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaWhatsapp size={30} /></a>
        </div>
        <div className=" mt-10 overflow-hidden rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,.15)]">

        <iframe
          title="Google Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9310873275435!2d77.31538177529274!3d28.421336175780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd707738a871%3A0x452e25c7e43b4474!2sStreet%20strength%20studio!5e0!3m2!1sen!2sin!4v1782735953532!5m2!1sen!2sin"
          width="100%"
          height="100"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen /></div>
          </div>
           

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            ©2026 <span className="text-orange-500">Street Strength Studio</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="/abc" className="hover:text-orange-500">
              Privacy
            </a>

            <a href="/abc" className="hover:text-orange-500">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;