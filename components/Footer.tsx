import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import antepLogo from "../assets/anteplogo.jpeg";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=228-230+Cowley+Road,+Oxford,+OX4+1UH";

const quickLinks = [
  ["Menu", "/menu"],
  ["About Us", "/about"],
  ["Gallery", "/gallery"],
  ["Semi Dining", "/semi-dining"],
  ["What's On", "/whats-on"],
  ["Contact Us", "/contact"],
] as const;

const openingHours = [
  "Monday – Sunday",
  "12 PM – 11:00 PM",
];

function ContactDetail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-black">
        <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
      </span>
      <div className="pt-0.5">
        <p className="text-xs font-bold tracking-[0.12em] text-white uppercase">{label}</p>
        <p className="mt-1 text-sm text-[#d8c491] sm:text-base">{children}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-[1440px]">
        <section className="grid items-center gap-10 border-b border-white/15 pb-14 lg:grid-cols-[minmax(160px,0.7fr)_minmax(340px,1.2fr)_minmax(430px,1fr)] lg:gap-14">
          <Link href="/" aria-label="Antep Kitchen home" className="group w-fit justify-self-center lg:justify-self-start">
            <img
              src={antepLogo.src}
              alt="Antep Kitchen"
              className="h-20 w-auto rounded-[10px] transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="mx-auto grid w-fit gap-5 sm:grid-cols-3 lg:mx-0 lg:grid-cols-1">
            <ContactDetail icon={Phone} label="Call us">01865 247 555</ContactDetail>
            <ContactDetail icon={Mail} label="Email">oxford@antepkitchen.co.uk</ContactDetail>
            <ContactDetail icon={MapPin} label="Address">228–230 Cowley Road, Oxford, OX4 1UH</ContactDetail>
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Antep Kitchen location in Google Maps"
            className="group relative block h-[250px] overflow-hidden rounded-[10px] bg-[#e7e2d8] outline-offset-4 transition hover:outline hover:outline-1 hover:outline-[#d8b65f] sm:h-[280px]"
          >
            <iframe
              title="Antep Kitchen location map"
              src="https://maps.google.com/maps?q=228-230+Cowley+Road,+Oxford,+OX4+1UH&z=16&output=embed"
              className="pointer-events-none size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/65 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              Open in Google Maps
            </span>
          </a>
        </section>

        <section className="grid gap-12 pt-12 md:grid-cols-2 xl:grid-cols-[1fr_1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-5">
              <h2 className="font-display text-[22px] text-[#c4d0e5]">Opening Hours</h2>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <ul className="mt-7 space-y-3 text-sm leading-none text-[#75859b]">
              {openingHours.map((hours) => <li key={hours}>{hours}</li>)}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-5">
              <h2 className="font-display text-[22px] text-[#c4d0e5]">Quick Links</h2>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <nav aria-label="Footer navigation" className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-[#9cabc0]">
              {quickLinks.map(([label, href]) => (
                <Link key={href} href={href} className="transition-colors hover:text-[#d8b65f]">{label}</Link>
              ))}
            </nav>
          </div>

          <div className="self-center text-center xl:pt-9">
            <p className="text-base text-[#8291a5]">We Are Social</p>
            <div className="mt-6 flex justify-center gap-6">
              <a href="https://www.facebook.com/antepkitchenoxford/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-16 place-items-center rounded-full border-2 border-[#d8b65f] text-[#d8b65f] transition-all hover:scale-110 hover:bg-[#d8b65f] hover:text-black">
                <FacebookIcon size={28} strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/antepkitchenoxford/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-16 place-items-center rounded-full border-2 border-[#d8b65f] text-[#d8b65f] transition-all hover:scale-110 hover:bg-[#d8b65f] hover:text-black">
                <InstagramIcon size={28} strokeWidth={1.5} />
              </a>
              <a href="https://www.tiktok.com/@antepkitchenoxford" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-16 place-items-center rounded-full border-2 border-[#d8b65f] text-[#d8b65f] transition-all hover:scale-110 hover:bg-[#d8b65f] hover:text-black">
                <TikTokIcon size={28} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
