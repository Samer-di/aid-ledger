export default function WorkingHours() {
  return (
    <section className="rounded-xl border border-[#D5DEE7] bg-white p-6">
      <h2 className="text-2xl font-bold text-[#0F1126]">Working Hours</h2>

      <div className="mt-6 text-[#181E33]">
        <p className="font-semibold">Monday - Friday</p>
        <p>9:00 AM - 5:00 PM</p>
      </div>

      <div className="mt-4 text-[#181E33]">
        <p className="font-semibold">Saturday - Sunday</p>
        <p>Closed</p>
      </div>
    </section>
  );
}
