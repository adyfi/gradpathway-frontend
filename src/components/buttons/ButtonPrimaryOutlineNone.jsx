import React from 'react'
import './_buttons.scss';
import { Link } from 'react-router-dom';

export const ButtonPrimaryOutlineNone = ({title, link}) => {
    return (
        <div className='custom-btn-primary-outline-none d-flex align-items-center'>
            <Link to={`${link}`} className="btn custom-bpi d-flex align-items-center gap-2 rounded-pill">
                <span className="m-0">
                    {title}
                </span>
                <img src="./arrow-right.svg" className="icon-arrow-right" alt="" />
            </Link>
        </div>
    )
}
