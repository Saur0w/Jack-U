"use client";

import Link from "next/link";
import styles from './style.module.scss';

export default function Header() {
  return (
      <header
          className={`fixed top-0 left-0 h-40 w-screen bg-transparent overflow-hidden flex justify-center items-center gap-x-20 ${styles.header}`}
      >
      <Link href="/"><h1>Home</h1></Link>
      <Link href="/about"><h1>About</h1></Link>
      <Link href="/music"><h1>Music</h1></Link>
      <Link href="/contact"><h1>Contact</h1></Link>
    </header>
  );
}