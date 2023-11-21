import React, { useState } from 'react';
import ProductItem from './components/productItem';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const handleAddProduct = () => {
    const name = prompt('Введите имя продукта');
    const price = parseFloat(prompt('Введите цену продукта'));
    const count = parseInt(prompt('Введите число продукта'));

    const newProduct = { id: Date.now(), name, price, count };
    setProducts([...products, newProduct]);
  };

  const handleIncrement = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id && product.count > 1) {
        return { ...product, count: product.count - 1 };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className='wh'>
      <div className='qq'>
        <h1>Products</h1>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className='blocks'>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;