"use client";

import Image from 'next/image';

export default function Diplo() {
    return (
        <section className="h-screen w-screen bg-white overflow-hidden">
            <div className='p-50 h-auto w-auto overflow-hidden'>
                <div>
                    <Image src="/images/diplo.jpg" alt="skrillex" width={500} height={500} />
                </div>
            </div>
        </section>
    )
}