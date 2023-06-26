import MiniCartProduct from './MiniCartProduct';
import { useStoreContext } from '../../contexts/StoreContext'

const MiniCartProductList = () => {
 
  const { cartItems } = useStoreContext()

  return (
    <div>
      <div className='minicart-product-list'>
        {cartItems?.map((product) => (
          <MiniCartProduct key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default MiniCartProductList;
