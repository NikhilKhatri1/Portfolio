import PropTypes from 'prop-types'
import React from 'react'




export const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}
                {
                    icon ?
                        <span className='material-symbols-rounded' aria-hidden='true'>{icon}</span> : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-primary ' + classes}>
                {label}
                {
                    icon ?
                        <span className='material-symbols-rounded' aria-hidden='true'>{icon}</span>
                        : undefined
                }
            </button>
        )
    }
}

ButtonPrimary.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {
                    icon ?
                        <span className='material-symbols-rounded' aria-hidden='true'>{icon}</span> : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-outline ' + classes}>
                {label}
                {
                    icon ?
                        <span className='material-symbols-rounded' aria-hidden='true'>{icon}</span>
                        : undefined
                }
            </button>
        )
    }
}

ButtonOutline.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export default {
    ButtonPrimary,
    ButtonOutline
}