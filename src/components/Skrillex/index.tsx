"use client";

import Image from 'next/image';

export default function Skrillex() {
    return (
        <section className="h-screen w-screen bg-white overflow-hidden">
            <div className='p-50 h-auto w-auto overflow-hidden flex flex-row gap-2'>
                <div>
                    <Image src="/images/skrillex.jpg" alt="skrillex" width={500} height={500} />
                </div>

                <div className="p-24">
                    <p className="text-black">
                        Skrillex is the feeling.<br/>
                        He bends noise into emotion, distortion into melody, chaos into something painfully human. <br />
                        Every drop feels torn, rebuilt, and screamed back to life.<br />
                        In Jack Ü, Skrillex brings the heart — the tension, the release, the moments that hit harder than the speakers ever could.
                    </p>
                </div>
            </div>
        </section>
    )
}