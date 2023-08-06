import React from 'react'
import './Card.css';

const Card = (props) => {
    const { title, desc, link, src,children } = props;  // props object lai destructure gareko

    // this space is the space of javascript

    return (
        <div className='sub-div'>
            <h2 className='main-header'>{title}</h2>
            <img src={src}
                style={{ height: 50, width: 50 }}
                alt='facebook logo'  // first {} indicate javascript begins and second {} indicate javascript object
            />
            <br />
            <p>{desc}</p>

            <a href={link}>Visit site</a>

            {children}
        </div>

    )
}

export default Card