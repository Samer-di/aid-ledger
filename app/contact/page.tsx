import WorkingHours from "./components/WorkingHours";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F3F7FA] px-6 py-12">
      <h1 className="text-center text-4xl font-bold text-[#0F1126]">
        Contact Us
      </h1>

      <p className="mt-4 text-center text-[#181E33]">
        We would love to hear from you.
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2">
        <WorkingHours />
        <ContactForm />
      </div>
    </div>
  );
}
