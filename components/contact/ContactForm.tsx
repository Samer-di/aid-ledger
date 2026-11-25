export default function ContactForm() {
  const inputClass =
    "w-full rounded-lg border border-[#D5DEE7] bg-white p-3 text-[#181E33] placeholder:text-[#94A3B8] focus:border-[#1B4195] focus:outline-none";

  const labelClass = "font-medium text-[#0F1126]";

  return (
    <section className="rounded-xl border border-[#D5DEE7] bg-white p-6">
      <h2 className="text-2xl font-bold text-[#0F1126]">Contact Form</h2>

      <form className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message"
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="button"
          className="w-full cursor-pointer rounded-lg bg-[#1B4195] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#153477]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
