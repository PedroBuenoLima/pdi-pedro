import CloseIcon from "../../assets/CloseIcon";
import { useStoreContext } from "../../contexts/StoreContext";
import { Product } from "../../types/Product";



interface MiniCartProdctProps {
  product: Product;
}

const MiniCartProdct = ({ product }: MiniCartProdctProps) => {

  const { setCartItems, cartItems, deleteProductFromCart } = useStoreContext()

  if (!setCartItems || !cartItems) {
    return null
  }



  return (
    <div className="minicard-container">
      <div className="minicart-product-container">
        <img src={product.image_url} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>Preço R${product.price}</p>
        </div>
        <div>
          <button className='minicart-product-button' type="submit" onClick={() => deleteProductFromCart && deleteProductFromCart(product)}>
            <CloseIcon />
          </button>
          <button className='minicart-add-button' type="submit" onClick={() => setCartItems([...cartItems, product])}>
            Adicione
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiniCartProdct