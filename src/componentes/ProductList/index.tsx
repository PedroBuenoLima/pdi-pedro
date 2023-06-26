import ProductCard from './ProductCard';
import { useStoreContext } from '../../contexts/StoreContext';
import usePasseiosData from '../../hooks/usePasseiosData';
import { Product } from '../../types/Product';

const ProductList = () => {
  const { setCartItems, cartItems } = useStoreContext();
  const data: Product[] = usePasseiosData();

  if (!setCartItems || !cartItems) {
    return null;
  }

  return (
    <div>
      <h1 className='product-carousel-title'>Nossos Passeios</h1>
      <div className='product-carousel'>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
