import React from 'react'
import './_buttons.scss';
import { Link } from 'react-router-dom';

export const ButtonWithGenAIicon = ({ title, link }) => {
    return (
        <Link to={link}> 
        <button className="btn btn-p d-flex align-items-center">
            <span className="m-0">
                {title}
            </span>
            <img src="./bi_stars.svg" className="icon-stars" alt="" />
        </button>
        </Link>
    )
}
