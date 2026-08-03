import { Users } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import img1 from "../../assets/semi_private/img1.webp";
import img2 from "../../assets/semi_private/img2.webp";
import img3 from "../../assets/semi_private/img3.webp";

export default function SemiDiningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Hire"
        title="Dining at Antep Kitchen"
        subtitle="Set-apart rooms for dinners, birthdays and small celebrations."
      />

      {/* Capacity & Images Section */}
      <section className="bg-[#0c0b09] py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow text-gold mb-4">The Room</p>
              <h2 className="font-display text-4xl sm:text-5xl text-cream mb-6">
                Antep
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="grid size-12 place-items-center rounded-full bg-white/10 text-gold">
                  <Users size={20} />
                </span>
                <div>
                  <p className="eyebrow text-gold">Capacity</p>
                  <p className="text-cream text-lg">70 people</p>
                </div>
              </div>
              <p className="text-muted leading-relaxed">
                Our Antep semi-private dining room offers an intimate yet spacious
                setting for your celebrations. With a capacity of up to 70 guests,
                the space is perfect for birthdays, business dinners, and special
                occasions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={img1}
                alt="Antep dining room view 1"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-[280px] object-cover rounded-[12px] col-span-2"
              />
              <Image
                src={img2}
                alt="Antep dining room view 2"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="w-full h-[200px] object-cover rounded-[12px]"
              />
              <Image
                src={img3}
                alt="Antep dining room view 3"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="w-full h-[200px] object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-[#101310] py-20 px-6 lg:px-10 border-t border-line">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-gold mb-3">Reserve Your Table</p>
            <h2 className="font-display text-4xl text-cream">Book the Antep Room</h2>
          </div>
          <form className="space-y-5">
            <label className="block">
              <span className="eyebrow mb-2 block text-cream">Number of People (optional)</span>
              <select className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold">
                <option value="">Select number of guests</option>
                {Array.from({ length: 70 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="eyebrow mb-2 block text-cream">Dining Room Preference</span>
              <select className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold">
                <option value="antep">Antep</option>
              </select>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow mb-2 block text-cream">Name *</span>
                <input
                  required
                  type="text"
                  className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold"
                />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block text-cream">Last Name *</span>
                <input
                  required
                  type="text"
                  className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold"
                />
              </label>
            </div>

            <label className="block">
              <span className="eyebrow mb-2 block text-cream">Phone *</span>
              <input
                required
                type="tel"
                className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold"
              />
            </label>

            <label className="block">
              <span className="eyebrow mb-2 block text-cream">Email *</span>
              <input
                required
                type="email"
                className="w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold"
              />
            </label>

            <label className="block">
              <span className="eyebrow mb-2 block text-cream">Message *</span>
              <textarea
                required
                className="min-h-[150px] w-full rounded-[8px] bg-white px-4 py-3 text-[#0c0b09] outline-none focus:ring-2 focus:ring-gold"
              />
            </label>

            <label className="flex items-start gap-3 text-xs text-muted">
              <input required type="checkbox" className="mt-1" />
              I consent to having this website store my submitted information so they can respond to my enquiry.
            </label>

            <button
              type="submit"
              className="rounded-[6px] bg-[#c95535] px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition hover:bg-[#e06c4b]"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
