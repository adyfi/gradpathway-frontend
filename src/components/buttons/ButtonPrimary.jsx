import React from 'react'
import './_buttons.scss';

export const ButtonPrimary = ({title, link}) => {
    return (
        <div className='custom-btn-primary d-flex align-items-center'>
            <a href={`${link}`} class="btn custom-bpi d-flex align-items-center gap-2 rounded-pill">
                <span class="m-0">
                    {title}
                </span>
                <img src="./arrow-right.svg" class="icon-arrow-right" alt="" />
            </a>
        </div>
    )
}
