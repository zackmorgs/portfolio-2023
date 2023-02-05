import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler</title>
        <meta name="description" content="A personal website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img className={styles.profile} src="/img/playing-guitar.jpg"></img>
        <h1>Zack Morgenthaler</h1>
        <p className={styles.subheading}>Programmer, Music Maker, and Artist</p>
      </main>
    </>
  )
}
