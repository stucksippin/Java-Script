import React, { useState } from 'react';

function ProductItem(props) {
    const { product, onIncrement, onDecrement, onDelete } = props;
    const [count, setCount] = useState(product.count);

    const handleIncrement = () => {
        setCount(count + 1);
        onIncrement(product.id);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
            onDecrement(product.id);
        }
    };

    return (
        <div className='all-block'>
            <h3 className='prod_name'>{product.name}</h3>
            <p className='prod_price'>Price: {product.price}</p>
            <div className='btn'>
                <button onClick={handleIncrement}>+</button>
                <p>Count: {count}</p>
                <button onClick={handleDecrement}>-</button>
            </div>


            <div className='deleteBtn' onDoubleClick={() => onDelete(product.id)}>DOUBLE CLICK TO DELETE</div>
        </div>
    );
}

export default ProductItem;