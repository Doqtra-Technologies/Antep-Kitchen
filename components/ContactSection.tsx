import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=228-230+Cowley+Road,+Oxford,+OX4+1UH";
const hours = [["Monday – Sunday", "12 PM – 11:00 PM"]];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-[#101310] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="mb-10 font-display text-4xl text-cream">Contact Us</h2>
          <div className="mb-12 space-y-8">
            <a href="tel:01865247555" className="flex items-start gap-4 transition hover:opacity-80"><span className="grid size-11 place-items-center rounded-full bg-white text-black"><Phone size={16} /></span><span><b className="eyebrow block text-gold">Call Us</b><span className="mt-1 block text-cream">01865 247 555</span></span></a>
            <a href="mailto:oxford@antepkitchen.co.uk" className="flex items-start gap-4 transition hover:opacity-80"><span className="grid size-11 place-items-center rounded-full bg-white text-black"><Mail size={16} /></span><span><b className="eyebrow block text-gold">Email</b><span className="mt-1 block text-cream">oxford@antepkitchen.co.uk</span></span></a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 transition hover:opacity-80"><span className="grid size-11 place-items-center rounded-full bg-white text-black"><MapPin size={16} /></span><span><b className="eyebrow block text-gold">Address</b><span className="mt-1 block text-cream">228–230 Cowley Road, Oxford, OX4 1UH</span></span></a>
          </div>
          <div className="flex items-center gap-5"><h3 className="eyebrow text-cream">Opening Hours</h3><span className="h-px flex-1 bg-white/20" /></div>
          <div className="mt-6 grid max-w-md grid-cols-2 gap-x-8 gap-y-4">{hours.map(([day, time]) => <div key={day}><p className="text-lg font-semibold text-cream">{day}</p><p className="text-lg text-[#d8c491]">{time}</p></div>)}</div>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="mb-10 font-display text-4xl text-cream">Get In Touch</h2>
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2"><Field label="Name *" /><Field label="Last Name *" /></div>
            <Field label="Phone *" type="tel" /><Field label="Email *" type="email" />
            <label className="block"><span className="eyebrow mb-2 block text-cream">Message *</span><textarea required className="min-h-[150px] w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold" /></label>
            <label className="flex items-start gap-3 text-xs text-muted"><input required type="checkbox" className="mt-1" />I consent to having this website store my submitted information so they can respond to my enquiry.</label>
            <button type="submit" className="rounded-[6px] bg-[#c95535] px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition hover:bg-[#e06c4b]">Submit</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return <label className="block"><span className="eyebrow mb-2 block text-cream">{label}</span><input required type={type} className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold" /></label>;
}
