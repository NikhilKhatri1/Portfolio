import React from 'react'

/**
 * Node Module
 */
import PropTypes from 'prop-types';

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
    return (
        <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}
        
        >
            <figure className="mb-4 rounded-lg img-box aspect-square">
                <img
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className='img-cover'
                />
            </figure>

            <div className="flex items-center justify-between gap-4">

                <div>
                    <h3 className='mb-3 title-1'>
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {
                            tags.map((label, key) => (
                                <span
                                    key={key}
                                    className='grid items-center h-8 px-3 text-sm rounded-lg tex-zinc-400 bg-zinc-50/5'
                                >
                                    {label}
                                </span>
                            ))}
                    </div>
                </div>


                <div className="grid rounded-lg w-11 h-11 place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span
                        className="material-symbols-rounded"
                        aria-hidden='true'
                    >
                        arrow_outward
                    </span>
                </div>



            </div>

            <a
                href={projectLink}
                target='_blank'
                className='absolute inset-0'
            ></a>

        </div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    projectLink: PropTypes.string
}

export default ProjectCard