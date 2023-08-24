import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router';

const Subtotal = () => {
    let navigate=  useNavigate()

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            {/* price */}

            <CurrencyFormat
                renderText={(value) => (
                    <>

                    <p>
                    subtotal ({basket.length} items): <strong>{`${value}`}</strong>

                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order containes a gift
                            </small>
                    </p>
                    
                    
                    </>
                )}
        
        
            decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />



            <button onClick={e => navigate("../Payment")}>Procceed to Checkout</button>

        </div>
    )
}

export default Subtotal