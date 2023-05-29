import React from 'react';
import ProductCard from './productCard';
import corcovado from '../assets/corcovado.png'
import { Product } from '../../types/Product';

interface ProductListProps {
  handleAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ handleAddToCart }) => {
  const products = [
    { id: 1, name: 'CITY TOUR CORCOVADO', price: 10, imageUrl: corcovado, content: 'Conheça o Rio em 5h e leve muita história para casa!' },
    { id: 2, name: 'Product 2', price: 20, imageUrl: 'url-da-imagem-2', content: ' llala' },
    // Outros produtos...
  ];

  return (
    <div className='product-carousel'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
