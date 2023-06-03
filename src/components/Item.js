import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCartClick() {
    setInCart((inCart) => !inCart);
  }

  const inCartClassName = inCart ? 'in-cart' : '';
  const inCartText = inCart ? 'Remove from Cart' : 'Add to Cart';

  return (
    <li className={inCartClassName}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button
        className='add'
        onClick={handleAddToCartClick}>
        {inCartText}
      </button>
    </li>
  );
}

export default Item;
