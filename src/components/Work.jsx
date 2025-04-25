import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
    {
        imgSrc: '/project-1.jpg',
        title: 'Full stack Doctor Appointment App',
        tags: ['API', 'Tailwind', 'Development'],
        projectLink: 'https://doctor-appointment-app-9954.vercel.app/'
    },
    {
        imgSrc: '/project-2.jpg',
        title: 'Free stock photo App',
        tags: ['API', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: '/project-3.jpg',
        title: 'Ai Image Generator App',
        tags: ['Development', 'API'],
        projectLink: 'https://ai-image-generator-frontend-qauq.onrender.com/'
    },
    {
        imgSrc: '/project-4.jpg',
        title: 'Eduford University website',
        tags: ['Web-design', 'Development'],
        projectLink: ' https://nikhilkhatri1.github.io/Full_Responsive_Multipage-HTML-CSS-/'
    },
    {
        imgSrc: '/project-5.jpg',
        title: 'Nike website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://nikewebpagetrail.netlify.app/'
    },
    
];


const Work = () => {
    return (
        <section
            id='work'
            className='section'
        >
            <div className="container">

                <h2 className='mb-8 headline-2 reveal-up'>
                    My Portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                classes='reveal-up'
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work