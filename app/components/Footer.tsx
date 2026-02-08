"use client";

import { FaInstagram, FaLinkedin, FaImdb } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background py-24 px-8 mt-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Section title */}
        <h2 className="text-[10px] uppercase tracking-[0.5em] mb-16 opacity-50">
          Get in touch
        </h2>

        {/* Location and context*/}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">
            Colorist based in Lisbon
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mt-2">
            Available for projects worldwide
          </p>
        </div>

        {/* Contact */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 opacity-40">
            <HiOutlineMail size={16} />
            <span className="text-[9px] uppercase tracking-[0.3em]">Direct Mail</span>
          </div>
          
          <p className="text-sm tracking-widest uppercase">
            contact{" "}
            <a 
              href="mailto:aleixo.mafalda@gmail.com" 
              className="text-[#faf9f6] border-b border-[#faf9f6] border-opacity-30 hover:border-opacity-100 transition-all duration-300 pb-1"
            >
              aleixo.mafalda@gmail.com
            </a>
          </p>
          
          <p className="text-[10px] opacity-40 uppercase tracking-widest mt-2">
            for bookings and other informations
          </p>
        </div>

        {/* Social media and Links */}
        <div className="flex gap-10 items-center opacity-60">
          <a 
            href="https://www.imdb.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity duration-300"
            aria-label="IMDb Profile"
          >
            <FaImdb size={22} />
          </a>
          <a 
            href="https://instagram.com/mafaldaaleixo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity duration-300"
            aria-label="Instagram Profile"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Final */}
        <div className="mt-24 pt-8 border-t border-white border-opacity-5 w-full max-w-xs text-[9px] opacity-30 uppercase tracking-[0.3em]">
          © {currentYear} Mafalda Aleixo — Colorist
        </div>
      </div>
    </footer>
  );
};

export default Footer;