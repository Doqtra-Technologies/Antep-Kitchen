import Reveal from "./Reveal";
import Image from "next/image";
import eventBrunch from "../assets/events/--2.webp";
import eventDj from "../assets/events/2.webp";
import eventHappyHour from "../assets/events/3.webp";

const events = [
  { title: "Live Music", image: eventDj },
  { title: "Set Lunch", image: eventBrunch },
  { title: "Private Dining", image: eventHappyHour },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#c6a15b] px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow mb-2 text-[#0c0b09]/70">What&apos;s On</p>
          <h2 className="font-display text-4xl text-[#0c0b09] sm:text-5xl">Events</h2>
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 120} className="group relative overflow-hidden rounded-[18px] shadow-xl">
              <Image
                src={event.image.src}
                width={event.image.width}
                height={event.image.height}
                alt={event.title}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <h3 className="w-full p-6 font-display text-2xl tracking-[0.12em] text-cream uppercase">
                  {event.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
