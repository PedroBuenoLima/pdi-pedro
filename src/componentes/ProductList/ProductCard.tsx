import './product-card.scss';
import { Product } from '../../types/Product';
import { useStoreContext } from '../../contexts/StoreContext'
import usePasseiosData from '../../hooks/usePasseiosData';


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}:ProductCardProps) => {

  const { setCartItems, cartItems} = useStoreContext()
  const data: Product[] = usePasseiosData();

  if (!setCartItems || !cartItems) {
    return null
  }

  return (
    <div>
      {data.map(product => (
        <div key={product.id}>
          <div className="product-card-container">
            <div>
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
            <div className='product-card-info'>
              <p>{product.content}</p>
            </div>
          </div>
          <button className='product-card-button' type="submit" onClick={() => setCartItems([...cartItems, product])}>
            Preço: R${product.price}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
