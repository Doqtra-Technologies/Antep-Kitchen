"use client";

import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { name: "Rain Yan", time: "Google review", text: "Authentic cuisine and efficient catering. Although it was bustling when we went, we didn’t have to wait long before we were served and for the food to arrive. The meats were tender and grilled to a satisfactory level of crispiness. Portions were also generous, including the salads. The flatbread served before our meals were freshly baked with a proportionate airiness and fluffiness. My friends had Turkish tea which they also enjoyed. We also noted they celebrate people’s birthdays in a unique manner with energetic music and a dessert. Overall an enjoyable dining experience, would recommend." },
  { name: "George the Explorer", time: "Google review", text: "I had a nice experience at Antep Kitchen overall. The food was enjoyable and the service was good, so it is definitely a place worth visiting. The only downside was that inside the restaurant it was extremely loud. People were talking very loudly and it made the experience a bit uncomfortable at times. It would be great if something could be done to improve the noise levels, as it would make the atmosphere much more pleasant. Overall, a nice place with good food, but the noise inside did affect the experience." },
  { name: "Rabia Ahmed", time: "Google review", text: "Had an amazing experience at Anteps Oxford! The food was incredibly fresh and absolutely delicious, and the service was impressively quick. A very special thank you to Hassan for the excellent service. He was so welcoming, friendly, and attentive throughout. He truly made us feel valued as customers. I left very happy and will definitely be coming back. Highly recommend! Thank you Hassan." },
];

export default function TestimonialsSection() {
  const cards = [...reviews, ...reviews, ...reviews];
  const [active, setActive] = useState(4);
  const go = (direction: -1 | 1) => setActive((current) => Math.min(7, Math.max(1, current + direction)));

  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto mb-14 max-w-[1400px] px-6 text-center">
        <p className="mb-2 text-lg text-cream">We are happy to have the best services for our customers</p>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">Google Trust Index</h2>
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="overflow-hidden">
          <div className="flex gap-7 py-2 transition-transform duration-500 ease-out" style={{ transform: `translateX(calc(50% - 190px - ${active * 412}px))` }}>
            {cards.map((review, index) => <ReviewCard key={`${review.name}-${index}`} review={review} />)}
          </div>
        </div>
        <button type="button" onClick={() => go(-1)} disabled={active === 1} aria-label="Previous reviews" className="absolute left-2 top-1/2 z-10 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-[#242424] text-white transition hover:bg-[#3a3a3a] disabled:opacity-30 sm:left-5"><ChevronLeft size={34} /></button>
        <button type="button" onClick={() => go(1)} disabled={active === 7} aria-label="Next reviews" className="absolute right-2 top-1/2 z-10 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-[#242424] text-white transition hover:bg-[#3a3a3a] disabled:opacity-30 sm:right-5"><ChevronRight size={34} /></button>
      </div>
      <p className="mt-12 text-center text-sm text-[#9cabc0]">For more reviews, please visit our official <span className="font-semibold text-[#4285f4]">Google Business Page</span></p>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return <article className="w-[384px] shrink-0 rounded-[20px] border border-white/10 bg-[#232323] p-8 text-left">
    <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex size-11 items-center justify-center rounded-full bg-[#4285f4] text-lg font-semibold text-white">{review.name[0]}</div><div><p className="text-sm font-bold text-cream">{review.name}</p><p className="text-xs text-muted">{review.time}</p></div></div><span className="font-bold text-[#4285f4]">G</span></div>
    <div className="mb-4 flex gap-1 text-[#fbbc04]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" strokeWidth={0} />)}<BadgeCheck size={16} className="ml-2 text-[#4285f4]" aria-label="Google verified user" /></div>
    <p className="text-[15px] leading-7 text-[#f2eee7]">{review.text}</p>
  </article>;
}
