import React from 'react'

const Card = (props) => {
    return (
        <div className='card__container'>
            <div className='cards'>
                <div className='card'>
                    <img src={props.img_src} alt={props.img_alt} className='card__image' />
                    <div className='card__info'>
                        <span className='card__category'>{props.card_category}</span>
                        <h3 className='card__title'>{props.card_title}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
