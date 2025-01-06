import React from 'react';
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
    return (
        <section
            id='home'
            className='pt-28 lg:pt-24'
        >
            <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>

                <div>

                    <div className="flex items-center gap-3">

                        <figure className="rounded-lg img-box h-9 w-9">
                            <img
                                src="/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Nikhil Portfolio"
                                className='img-cover'
                            />
                        </figure>
                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                            </span>

                            Available for work
                        </div>

                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb--8 lg:mb-10">

                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className='flex items-center gap-3'>

                        <ButtonPrimary
                            href='https://drive.google.com/file/d/1B9oTem3SssjdRKJ7z6P228OwjU_YUt3H/view?usp=sharing'
                            target='_blank'
                            label="Download CV"
                            icon="download"
                        />

                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />

                    </div>

                </div>

                <div className='hidden lg:block'>
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-blue-400/40 via-25% via-blue-500/90 to-85% rounded-[60px] overflow-hidden">
                        <img
                            src="/hero-banner.png"
                            width={636}
                            alt="nikhil"
                            className='w-full lg:h-[550px]'
                        />
                    </figure>
                </div>


            </div>

        </section>
    )
}

export default Hero