
"use client";

import Link from "next/link";
import styles from "../aidledger.module.css";

export default function StaffLoginPage() {
  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>
        <Link href="/aidledger" className={styles.backLink}>
          ← Back to AidLedger
        </Link>

        <h1 className={styles.loginTitle}>
          Staff Login
        </h1>

        <p className={styles.loginDescription}>
          Sign in to access the AidLedger staff portal.
        </p>

        <form
          className={styles.loginForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          <button
            type="submit"
            className={styles.submitButton}
          >
            Login
          </button>
        </form>

        <p className={styles.loginNote}>
          Access is restricted to authorized staff and
          volunteers only.
        </p>
      </section>
    </main>
  );
}
