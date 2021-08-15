import React from 'react'
import './Preloader.css'

function Preloader({showPreloader}) {
    const showClass = showPreloader && "preloader__visible";
    return (
        <div className={`preloader ${showClass}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
