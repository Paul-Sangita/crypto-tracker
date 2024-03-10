import React from 'react'
import './header-coin.css'

const Coin = ({ name, image, price, priceChange }) => {
    return (
        <div className='coin-head-container'>
            <div className='coin-col'>
                <div className='head-coin'>
                    <img src={image} alt='crypto' />
                    <div className='coin-data-head'>
                        <h3 class="coin-heading">{name} </h3> {priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )}
                    </div>

                    <div className='coin-data-head'>
                        <p className='coin-price'>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin