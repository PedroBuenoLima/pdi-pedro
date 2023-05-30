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
    { id: 2, name: 'PASSEIO DE BARCO EM ARRAIAL', price: 20, imageUrl: 'url-da-imagem-2', content: 'Um dia inesquecível !' },
    { id: 3, name: 'CITY TOUR BÚZIOS', price: 30, imageUrl: 'url-da-imagem-2', content: 'Um dia em Búzios com passeio de escuna!' },
    { id: 4, name: 'CITY TOUR RIO', price: 40, imageUrl: 'url-da-imagem-2', content: 'Conheça os principais pontos turísticos da "Cidade Maravilhosa"' },
    { id: 5, name: 'CITY TOUR CABO FRIO', price: 50, imageUrl: 'url-da-imagem-2', content: 'Um dia inesquecível !' },
  ];

  return (
    <div>
      <h1 className='product-carousel-title'>Nossos Passeios</h1>
      <div className='product-carousel'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
