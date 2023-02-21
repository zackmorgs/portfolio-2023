import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler | About</title>
        <meta name="description" content="A personal website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <img id={styles.about_profile} src="/img/zack-and-karyna.jpg"></img>
        <h1>About</h1>
        <p className={styles.subheading}>Hi! I'm Zack. 👋</p>
        <p>I'm a programmer, musician, designer, and artist. I am based in Rochester, Minnesota.</p>
        <p>For programming, I do my work in C#, Node.js, JavaScript, CSS/SCSS, and of course HTML.</p>
        <p>I design in Photoshop, Illustrator, and InDesign.</p>
        <p>For music while I have worked in Pro Tools and Logic Pro X, these days I do my work in Reaper for my DAW. It is a joy to make music.</p>
      </main>
    </>
  )
}
