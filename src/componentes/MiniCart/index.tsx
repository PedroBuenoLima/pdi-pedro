import './minicart.scss'
import { MiniCartIcon } from '../../assets/MiniCartIcon'
import MiniCartProductList from './MiniCartProductList'
import CloseIcon from '../../assets/CloseIcon'
import { useStoreContext } from '../../contexts/StoreContext'

interface MiniCartProps {
  cartItemQuantity: number
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

const MiniCart = ({ cartItemQuantity,isCartOpen, setIsCartOpen }: MiniCartProps) => {

  const isCartEmpty = cartItemQuantity <= 0
  const { cartItems } = useStoreContext();

  const calcularTotal = () => {
    let total = 0;
  
    cartItems?.forEach((item) => {
      total += Number(item.price);
    });
  
    return total;
  };
  
  return (
    <div className='minicart-container'>
      <div className='minicart-header'>
        <h1 className='minicart-title'> Meu Carrinho ({cartItemQuantity})</h1>
        <button onClick={()=>setIsCartOpen(!isCartOpen)}><CloseIcon /></button>
      </div>
      <div className='minicart-data'>
        {isCartEmpty ?
          <div className='minicart-empty'>
            <MiniCartIcon />
            <p> Seu carrinho está vazio</p>
          </div> :
          <MiniCartProductList />
        }
      </div>
      <div className='minicart-footer minicart-container minicart-container-fixed'>
        <div>
          <p> Total R$ {calcularTotal().toFixed(2)} </p>
        </div>
        <button className='minicart-button'>
          Comprar - Realize seu sonho!
        </button>
      </div>
    </div>
  )
}

export default MiniCart