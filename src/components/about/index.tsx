"use client";

import styles from './style.module.scss';
import Image from 'next/image';

export default function About() {
    return (
        <section className={`h-screen w-screen bg-white overflow-hidden p-50 ${styles.about}`}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/jack-u.webp"
                        alt="main Image"
                        width={720} height={720}
                    />
                </div>

                <div className={styles.para}>
                    <p>Born from Skrillex and Diplo crashing worlds together, it’s the sound of broken speakers, midnight ideas, and melodies scribbled in the margins.<br />
                        Loud, playful, emotional, and a little unhinged — Jack Ü doesn’t follow rules, it redraws them. <br />
                        This isn’t just music you hear, it’s music you feel, dance to, wreck things to, and somehow still get emotional about.</p>
                </div>

            </div>
        </section>
    )
}