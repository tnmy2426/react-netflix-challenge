import React from 'react'

const Card = () => {
    return (
        <div className='card__container'>
            <div className='cards'>
                <div className='card'>
                    <img src="#" alt="Dot" className='card__image' />
                    <div className='card__info'>
                        <span className='card__category'>A netflix Original Film</span>
                        <h3 className='card__title'>DARK</h3>
                        <a href="#" target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
