import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd Love To Hear From You"
        title="Contact Us"
        subtitle="Reservations, private hire enquiries, or just to say hello."
      />
      <ContactSection />
    </>
  );
}
