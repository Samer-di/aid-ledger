"use client";

import Link from "next/link";

export default function StaffLoginPage() {
  return (
    <main className="mt-20 flex min-h-screen items-center justify-center caret-transparent bg-[#F3F7FA] px-5 py-10">
      <section className="w-full max-w-[440px] caret-transparent rounded-[18px] border border-[#D5DEE7] bg-white px-5 py-7 text-[#0F1126] shadow-[0_12px_35px_rgba(15,17,38,0.08)] min-[601px]:p-9">
        <Link
          href="/aidledger"
          className="cursor-pointer font-semibold text-[#007F80] no-underline"
        >
          ← Back to AidLedger
        </Link>

        <h1 className="mt-7 text-[28px] font-bold min-[601px]:text-[32px]">
          Staff Login
        </h1>

        <p className="mt-[10px] text-[#181E33]">
          Sign in to access the AidLedger staff portal.
        </p>

        <form
          method="post"
          name="staffLogin"
          className="mt-[30px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <label
            htmlFor="email"
            className="block font-semibold text-[#0F1126]"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
            className="mt-2 mb-[22px] block w-full caret-auto rounded-lg border border-[#D5DEE7] bg-white p-[14px] text-[#181E33] focus:outline-2 focus:outline-offset-1 focus:outline-[#1B4195]"
          />

          <label
            htmlFor="password"
            className="block font-semibold text-[#0F1126]"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="mt-2 mb-[22px] block w-full caret-auto rounded-lg border border-[#D5DEE7] bg-white p-[14px] text-[#181E33] focus:outline-2 focus:outline-offset-1 focus:outline-[#1B4195]"
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg border-0 bg-[#1B4195] p-[14px] font-bold text-white transition-colors hover:bg-[#153577]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-[13px] text-[#181E33]">
          Access is restricted to authorized staff and
          volunteers only.
        </p>
      </section>
    </main>
  );
}