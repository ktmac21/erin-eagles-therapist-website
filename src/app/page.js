import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Erin Eagles LCSW</h1>
        
        <section className={styles.heroSection}>
          <Image src="/healing.png" alt="Healing" width={600} height={600} />
          <blockquote className={styles.quote}>
            "The wound is the place where the Light enters you." - Rumi
          </blockquote>
        </section>

        <section className={styles.serviceSection}>
          <div className={styles.serviceItem}>
            <Image src="/ketamine.png" alt="Ketamine Treatment" width={600} height={600} />
            <h2>Ketamine-Assisted Psychotherapy</h2>
            <p>Innovative treatment for depression and anxiety</p>
          </div>
          <div className={styles.serviceItem}>
            <Image src="/office.png" alt="Therapy Office" width={600} height={600} />
            <h2>Traditional Therapy</h2>
            <p>Compassionate care in a comfortable setting</p>
          </div>
        </section>

        <blockquote className={styles.quote}>
          "The greatest healing therapy is friendship and love." - Hubert H. Humphrey
        </blockquote>
      </main>
    </div>
  );
}
