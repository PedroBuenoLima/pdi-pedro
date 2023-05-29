import React from 'react';
import './product-card.scss';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {

  const handleButtonClick = () => {
    addToCart(product);
  };

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
        <button className='product-card-button' type="submit" onClick={handleButtonClick}>
          Preço: R${product.price}
        </button>
    </div>
  );
};

export default ProductCard;
