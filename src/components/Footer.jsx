import React from 'react'

/**
 * Components
 */
import { ButtonPrimary } from './Button';


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Education',
        href: '#education'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];


const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/NikhilKhatri1'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nikhil-khattri/'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/nikkhatri311'
    }
];


const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2 reveal-up">

                    <div className="mb-10">
                        <h2 className="mb-8 headline-1 lg:max-w-[12ch]">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                            href="mailto:nikkhatri311@gmai.com"
                            label="Start Project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20 reveal-up">

                        <div>
                            <p className="mb-2">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className='block py-1 text-sm transition-colors text-zinc-400 hover:text-zinc-200'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target='_blank'
                                            className='block py-1 text-sm transition-colors text-zinc-400 hover:text-zinc-200'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8 reveal-up">
                    <a
                        href="/"
                        className="reveal-up"
                    >
                        <img
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>
                    
                    <p className="text-sm text-zinc-500 reveal-up">
                        &copy; 2024 <span className='text-zinc-200'>Nikhil Khatri</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer