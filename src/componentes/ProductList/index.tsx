import ProductCard from './ProductCard';
import { useStoreContext } from '../../contexts/StoreContext'

const ProductList = () => {
 
  const { products } = useStoreContext()
  return (
    <div>
      <h1 className='product-carousel-title'>Nossos Passeios</h1>
      <div className='product-carousel'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
