import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Design System Configurator</h1>
          <p className={styles.subtitle}>
            Set your brand values to generate a token-based design system with light/dark mode and
            responsive layouts.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.card} aria-label="Brand colours">
          <h2 className={styles.cardTitle}>Brand Colours</h2>
          <p className={styles.cardBody}>Coming soon — colour ramp generation goes here.</p>
        </section>

        <section className={styles.card} aria-label="Typography">
          <h2 className={styles.cardTitle}>Typography</h2>
          <p className={styles.cardBody}>Coming soon — font scale configuration goes here.</p>
        </section>

        <section className={styles.card} aria-label="Spacing">
          <h2 className={styles.cardTitle}>Spacing</h2>
          <p className={styles.cardBody}>Coming soon — spacing scale configuration goes here.</p>
        </section>
      </main>
    </div>
  );
}
