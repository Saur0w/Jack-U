"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./style.module.scss";

export default function Header() {
    const hamburgerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    useGSAP(() => {

        const lines = hamburgerRef.current?.querySelectorAll('span');

        if (!lines) return;

        tl.current = gsap.timeline();
        if (isOpen) {
           tl.current.to(lines[0], { y: 10, rotate: 45, duration: 0.3, ease: "power2.out" }, 0)
               .to(lines[1], { opacity: 0, duration: 0.2 }, 0)
               .to(lines[2], { y: -10, rotate: -45, duration: 0.3, ease: "power2.out" }, 0);

           gsap.to(headerRef.current, {
               left: 50,
               right: 50,
               ease: "power2.out"
           });


        } else {
            tl.current.to(lines[0], { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }, 0)
                .to(lines[1], { opacity: 1, duration: 0.2 }, 0)
                .to(lines[2], { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }, 0);

            gsap.to(headerRef.current, {
                left: 400,
                right: 400,
                ease: "power2.out"
            });
        }

    }, { dependencies: [isOpen]});
    return (
        <header className={`fixed top-10  h-20 rounded-[10px] ${styles.header}`} ref={headerRef}>
            <div className={styles.topBar}>
                <div className={styles.hamburger} ref={hamburgerRef} onClick={toggleMenu} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.logo}>
                    <Image src="/images/logo.png" width={40} height={40} alt="logo"/>
                </div>
            </div>
        </header>
    )
}