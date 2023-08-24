import React from 'react'
import { useStateValue } from './StateProvider';

const CheckOutProduct = ({ id, title, image, price, rating, hideButton }) => {
    const [{ }, dispatch] = useStateValue();
    // remove item from basket

    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }

    return (
        <div className='Checkoutproduct'>
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>★</p>

                            ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}


            </div>

        </div>
    )
}

export default CheckOutProduct