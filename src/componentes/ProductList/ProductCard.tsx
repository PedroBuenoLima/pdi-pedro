import './product-card.scss';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  setCartItems: (items: Product[]) => void;
  cartItems: Product[];
}

const ProductCard = ({ product, setCartItems, cartItems }: ProductCardProps) => {
  return (
    <div>
      <div className="product-card-container">
        <div>
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
        <div className='product-card-info'>
          <p>{product.content}</p>
        </div>
      </div>
      <button
        className='product-card-button'
        type="submit"
        onClick={() => setCartItems([...cartItems, product])}
      >
        Preço: R${product.price}
      </button>
    </div>
  );
};

export default ProductCard;
