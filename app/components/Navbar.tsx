"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data struture
interface NavLinkItem {
  name: string;
  href: string;
}

interface NavLinkProps {
  link: NavLinkItem;
  pathname: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lista de links de navegação
  const navLinks: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "Narrative", href: "/narrative" },
    { name: "Documentary", href: "/documentary" },
    { name: "Lifestyle", href: "/lifestyle" },
  ];

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center py-8 page-x-padding mx-auto w-full">
        {/* Lado Esquerdo: Identidade */}
        <div className="text-xl tracking-[0.2em] font-light uppercase">
          Mafalda Aleixo
        </div>

        {/* Burger button for mobile*/}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-xs lowercase tracking-widest">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} pathname={pathname} />
          ))}
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-10 text-sm lowercase tracking-[0.3em] transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`transition-opacity duration-300 ${pathname === link.href ? "opacity-100" : "opacity-40"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// link component
const NavLink = ({ link, pathname }: NavLinkProps) => {
  const isActive = pathname === link.href;
  return (
    <Link 
      href={link.href}
      className={`transition-opacity hover:opacity-100 duration-300 ${
        isActive ? "opacity-100 border-b border-black pb-1" : "opacity-40"
      }`}
    >
      {link.name}
    </Link>
  );
};

export default Navbar;