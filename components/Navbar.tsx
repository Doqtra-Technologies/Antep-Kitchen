"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import antepLogo from "../assets/anteplogo.jpeg";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/semi-dining", label: "Semi Dining" },
  { href: "/whats-on", label: "What's On" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image src={antepLogo} alt="Antep Kitchen" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://www.opentable.com/r/antep-kitchen-oxfordshire"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gold bg-black text-gold eyebrow px-6 py-3 hover:bg-gold hover:text-[#0c0b09] transition-colors"
          >
            Reservation
          </a>
          <div className="flex items-center gap-3 text-gold">
            <a href="https://www.facebook.com/antepkitchenoxford/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white">
              <FacebookIcon size={16} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/antepkitchenoxford/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white">
              <InstagramIcon size={16} strokeWidth={1.5} />
            </a>
            <a href="https://www.tiktok.com/@antepkitchenoxford" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition hover:text-white">
              <TikTokIcon size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="lg:hidden text-cream"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full z-[60] flex flex-col gap-5 border-t border-line bg-[#0c0b09] px-6 py-6 shadow-2xl lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-cream/80 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.opentable.com/r/antep-kitchen-oxfordshire"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-gold text-[#0c0b09] eyebrow px-6 py-3 text-center mt-2"
          >
            Reservation
          </a>
        </div>
      )}
    </header>
  );
}
