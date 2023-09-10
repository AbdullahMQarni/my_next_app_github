import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my <span className={styles.first}>first Next.js App</span></h1>
      <div><Link className={styles.button} href={"./Hello.tsx"}>Go to Hello Page</Link></div>
      <div className={styles.description}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Pretty Title #1</div>
          <div className={styles.cardDesc}>this is a awesome Description for this awesome card</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Pretty Title #2</div>
          <div className={styles.cardDesc}>this is a awesome Description for this awesome card</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Pretty Title #3</div>
          <div className={styles.cardDesc}>this is a awesome Description for this awesome card</div>
        </div>
      </div>
    </main>
  )
}
