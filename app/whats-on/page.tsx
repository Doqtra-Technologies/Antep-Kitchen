import PageHeader from "@/components/PageHeader";
import EventsSection from "@/components/EventsSection";
import SplitFeature from "@/components/SplitFeature";

export default function WhatsOnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Promotions"
        title="What's On"
        subtitle="Brunches, DJ nights, happy hour and more — something on most nights of the week."
      />
      <EventsSection showOrderButton={false} />
      <SplitFeature />
    </>
  );
}
