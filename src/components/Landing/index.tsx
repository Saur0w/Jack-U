"use client";

import styles from './style.module.scss';
import Image from 'next/image';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from "react";

export default function Landing() {


    return (
        <section className={`w-screen h-screen bg-white overflow-hidden p-50 ${styles.landing}`}>
            <Image src="/images/logo.png" alt="logo" width={500} height={500} />
        </section>
    )
}