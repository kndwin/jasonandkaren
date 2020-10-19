import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from './index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason and Karyn</title>
        <link rel="preload" href="/fonts/Adlery-Swash.tff" />
      </Head>
      <section className={styles.background} />
      <div className={styles.container}>
        <section className={styles.title}>
          <h1 className={styles.title_text}>j+k</h1>
        </section>
        <section className={`${styles.ourstory} ${styles.center}`}>
          <div className={ ` ${styles.center}`}>
            <h1 className={styles.textH1}>Our Story</h1>
            <p>
                We met in the summer of 2010 when both were freshmen at Nanyang
                Technological University Singapore. Two persons from the same
                hometown met for the first time in the tiny red dot pursuing their
                dreams. It was not straight up mutual interest since the first meet,
                our story took the longer route.
                <br />
                <br />
                But eventually love found its way 2 years later when we officially
                committed to each other. Ever since then millions of tears and
                laughters have been shared, 3 continents have we conquered,
                thousands of "what should we eat for dinner" have been answered.
                <br />
                <br />
                Fast forward to a little over a year ago, Yonas proposed to Yulin at
                604 metres above sea level, over 10 thousands kilometres away from
                home and No(r)way... she said YES! This wedding will definitely be
                one of the most important moments in our life and we want to share
                the memories with people that we care the most.
                <br />
                <br />
            </p>
          </div>
        </section>
        <section className={`${styles.center} ${styles.ourwedding}`}>
          <div className={ `${styles.center}`}>
            <h1 className={styles.textH1}>the Wedding</h1>
            <p>
                Fast forward to a little over a year ago, Yonas proposed to Yulin at
                604 metres above sea level, over 10 thousands kilometres away from
                home and No(r)way... she said YES! This wedding will definitely be
                one of the most important moments in our life and we want to share
                the memories with people that we care the most.
            </p>
          </div>
        </section>
        <section className={`${styles.rsvp} ${styles.center}`}>
          <h1 className={styles.textH1}>
            <Link href="/rsvp">RSVP</Link>
          </h1>
        </section>
      </div>
    </>
  )
}
