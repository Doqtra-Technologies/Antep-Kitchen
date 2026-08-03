import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitFeature />
      <EventsSection />
      <GallerySection showHeading />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
