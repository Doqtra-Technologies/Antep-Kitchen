import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visual Journey"
        title="Gallery"
        subtitle="A look at the rooms, the pours, and the plates."
      />
      <GallerySection />
    </>
  );
}
