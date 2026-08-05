"use client";

import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  { name: "Rain Yan", text: "Authentic cuisine with generous portions. The meats were tender and grilled perfectly. Great dining experience!" },
  { name: "George the Explorer", text: "Good food and service. The ambiance was energetic, overall a nice place to visit." },
  { name: "Rabia Ahmed", text: "Amazing experience! Fresh, delicious food and excellent service from Hassan. Will definitely be back!" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">What Our Customers Say</h2>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full shrink-0 px-4">
                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 sm:p-8 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#4285f4] text-base font-semibold text-white">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cream">{review.name}</p>
                      <div className="flex gap-0.5 text-[#fbbc04]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#d0d0d0]">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active ? 'w-8 bg-[#d8b65f]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#9cabc0]">
          For more reviews, visit our <a href="https://share.google/prCUMwE9Pru44RZUy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4285f4] hover:underline">Google Business Page</a>
        </p>
      </div>
    </section>
  );
}
