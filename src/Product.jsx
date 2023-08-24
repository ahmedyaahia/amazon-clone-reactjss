import React from 'react'
import { useStateValue } from './StateProvider';


const Product = ({ id, title, image, price, rating }) => {
 const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item with given ID and quantity of one to the cart in state
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
    
    
  };
 
  return (
    <section className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p>★</p>

              ))
            }
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>

    </section>
  );
}

export default Product