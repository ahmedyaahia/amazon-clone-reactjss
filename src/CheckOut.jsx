import React from 'react'
import { useStateValue } from './StateProvider'
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';

const CheckOut = () => {
    const [{ basket, user }, dispatch] = useStateValue();



    return (
        <div className='checkout'>
            <div className="checkout__left">

                <img src="/images/waterandmountains.jpg"
                    alt="" className="checkout__ad" />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className='checkout__title'>Your Shopping Basket is empty</h2>
                        <p>Go back to our products page and add some items.</p>
                    </div>

                ) : (
                    <div>
                        <h3>Hello, {user?.email}</h3>

                        <h2 className='checkout__title'>Your Shopping Basket</h2>

                        {/* List out all of the Chekout Product */}

                        {basket?.map(item => (
                            <CheckOutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}


                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (

                <div class="checkout__right">
                    <Subtotal />
                </div>

            )}
        </div>
    )
}

export default CheckOut