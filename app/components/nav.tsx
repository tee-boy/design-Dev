'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const leftLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Service', href: 'services' },
  ];

  const rightLinks = [
    { name: 'Resume', href: 'resume' },
    { name: 'Project', href: 'project' },
    { name: 'Contact', href: 'contact' },
  ];

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-324.5 max-w-[95%] bg-[#1A004A] h-21.5 rounded-[50px] border border-white/20 shadow-lg px-8 md:px-12 flex items-center justify-between transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-[120%]'
      }`}
    >
      {/* === LEFT LINKS === */}
      <div className="hidden md:flex items-center space-x-8">
        {leftLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.href}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            onSetActive={() => setActiveSection(link.href)}
            className={`cursor-pointer text-base font-medium px-5 py-2 rounded-full transition-all duration-300 ${
              activeSection === link.href
                ? 'bg-white text-[#1A004A] font-semibold shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {link.name}
          </ScrollLink>
        ))}
      </div>

      {/* === CENTER LOGO === */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A004A] font-bold text-sm">
          <b>.TE.</b>
        </div>
        <Image
          src="/portfoliologo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain brightness-10 invert"
        />
      </div>

      {/* === RIGHT LINKS === */}
      <div className="hidden md:flex items-center space-x-8">
        {rightLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.href}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            onSetActive={() => setActiveSection(link.href)}
            className={`cursor-pointer text-base font-medium px-5 py-2 rounded-full transition-all duration-300 ${
              activeSection === link.href
                ? 'bg-white text-[#1A004A] font-semibold shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {link.name}
          </ScrollLink>
        ))}
      </div>

      {/* === MOBILE MENU TOGGLE === */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-all"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}