import React from 'react';
import './product-card.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    content: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <div className="product-card-container">
        <div>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
        <div className='product-card-info'>
          <p>{product.content}</p>
        </div>
      </div>
        <button className='product-card-button' type="submit">Preço: R${product.price}</button>
    </div>
  );
};

export default ProductCard;
