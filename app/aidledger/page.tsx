import Link from "next/link";

export default function AidLedgerPage() {
  return (
    <main className="mt-20 min-h-screen caret-transparent bg-[#F3F7FA] px-4 py-9 text-[#0F1126] min-[601px]:px-6 min-[601px]:py-[60px]">
      <div className="mx-auto max-w-[1100px]">
        {/* Hero Section */}
        <section className="mb-9 caret-transparent min-[601px]:mb-[60px]">
          <p className="mb-4 font-bold tracking-[2px] text-[#007F80]">
            AIDLEDGER
          </p>

          <h1 className="mb-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] font-extrabold">
            Making Every Act of Support Count
          </h1>

          <p className="max-w-[650px] text-lg leading-[1.8] text-[#181E33]">
            AidLedger is a system designed to help our
            association organize assistance programs and
            support communities more effectively.
          </p>
        </section>

        {/* What is AidLedger? */}
        <section className="mb-6 caret-transparent rounded-2xl border border-[#D5DEE7] bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,17,38,0.06)] min-[601px]:p-8">
          <h2 className="mb-[14px] text-[26px] font-bold">
            What is AidLedger?
          </h2>

          <p className="leading-[1.8] text-[#181E33]">
            AidLedger helps authorized staff and volunteers
            manage aid-related activities in one organized place.
          </p>
        </section>

        {/* How does it work? */}
        <section className="mb-6 caret-transparent rounded-2xl border border-[#D5DEE7] bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,17,38,0.06)] min-[601px]:p-8">
          <h2 className="mb-[14px] text-[26px] font-bold">
            How does it work?
          </h2>

          <p className="leading-[1.8] text-[#181E33]">
            Authorized team members sign in to access the tools
            they need to coordinate assistance and manage programs.
          </p>
        </section>

        {/* Staff Login */}
        <section className="mt-10 caret-transparent rounded-2xl border border-[#D5DEE7] bg-white px-[18px] py-7 text-center min-[601px]:px-6 min-[601px]:py-9">
          <h2 className="mb-[14px] text-[28px] font-bold">
            Staff Portal
          </h2>

          <p className="mb-6 text-[#181E33]">
            Are you an authorized staff member or volunteer?
          </p>

          <Link
            href="/login"
            className="inline-block cursor-pointer rounded-[10px] bg-[#1B4195] px-8 py-[14px] font-bold text-white no-underline transition-colors hover:bg-[#153577]"
          >
            Staff Login
          </Link>

          <p className="mt-[22px] text-sm text-[#181E33]">
            Access is restricted to authorized staff and
            volunteers only.
          </p>
        </section>
      </div>
    </main>
  );
}