'use client'

import React from 'react';
import Image from 'next/image';
import SkillText from '../sub/SkillText'

const SkillsOne: React.FC = () => {
    return (
        <section
            id='skills'
            className='flex items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20'
            style={{ transform: "scale(0.9)" }}
        >
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <SkillText />

                <div className='mt-8'>

                    <div className='flex items-center justify-center'>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                            <Image src="/html.png" alt="HTML" width={150} height={150} />
                        </div>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                            <Image src="/css.png" alt="CSS" width={150} height={160} />
                        </div>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center px-2'>
                            <Image src="/js.png" alt="JavaScript" width={130} height={120} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mx-2'>
                            <Image src="/react.png" alt="React" width={150} height={150} />
                        </div>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mx-2'>
                            <Image src="/next.png" alt="Next.js" width={150} height={150} />
                        </div>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mx-2'>
                            <Image className='pt-1' src="/node-js.png" alt="Node.js" width={150} height={140} />
                        </div>
                        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mx-2'>
                            <Image src="/tailwind.png" alt="Tailwind CSS" width={150} height={150} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsOne;
