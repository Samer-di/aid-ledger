
import Link from "next/link";
import styles from "../aidledger.module.css";

export default function AidLedgerPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <p className={styles.sectionLabel}>AIDLEDGER</p>

          <h1 className={styles.heroTitle}>
            Making Every Act of Support Count
          </h1>

          <p className={styles.description}>
            AidLedger is a system designed to help our
            association organize assistance programs and
            support communities more effectively.
          </p>
        </section>

        {/* What is AidLedger? */}
        <section className={styles.infoCard}>
          <h2>What is AidLedger?</h2>
          <p>
            AidLedger helps authorized staff and volunteers
            manage aid-related activities in one organized place.
          </p>
        </section>

        {/* How does it work? */}
        <section className={styles.infoCard}>
          <h2>How does it work?</h2>
          <p>
            Authorized team members sign in to access the tools
            they need to coordinate assistance and manage programs.
          </p>
        </section>

        {/* Staff Login */}
        <section className={styles.staffPortal}>
          <h2>Staff Portal</h2>

          <p>
            Are you an authorized staff member or volunteer?
          </p>

          <Link href="/login" className={styles.loginButton}>
            Staff Login
          </Link>

          <p className={styles.accessNote}>
            Access is restricted to authorized staff and
            volunteers only.
          </p>
        </section>
      </div>
    </main>
  );
}
