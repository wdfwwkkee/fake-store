import React from 'react'

const Price = ({ price }) => {
    return (
        <div className='price'>
            {new Intl.NumberFormat('ru-RU', {
                style: 'currency', currency: 'RUB',
            }).format(price)}
        </div>
    )
}

export default Price