"use client";

import Image from 'next/image';

export default function Diplo() {
    return (
        <section className="h-screen w-screen bg-white overflow-hidden">
            <div className='p-50 h-auto w-auto overflow-hidden flex flex-row gap-2'>
                <div>
                    <Image src="/images/diplo.jpg" alt="skrillex" width={500} height={500} />
                </div>
                <div className="p-24">
                    <p className="text-black">
                        A restless mind jumping borders, genres, and rules, he turns global sounds into raw energy.<br />
                        From dusty dance floors to blown-out festival speakers, Diplo doesn’t chase trends — he collides them. <br />
                        In Jack Ü, he’s the chaos engine, the rhythm that refuses to sit still, the pulse that keeps pushing everything forward.
                    </p>
                </div>

            </div>
        </section>
    )
}