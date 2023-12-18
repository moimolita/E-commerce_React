import React from 'react';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <span role="img" aria-label="cart">🛒</span>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;