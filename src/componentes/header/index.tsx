import React, {useState, useEffect} from 'react';
import logo from '../../assets/logo.png'
import './header.scss'
import { CartHeaderIcon } from '../../assets/CartHeaderIcon';
import SearchIcon from '../../assets/SearchIcon';
import { useStoreContext } from '../../contexts/StoreContext';
import MiniCart from '../MiniCart'

interface HeaderProps {
  onSearch: (searchValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const [cartItemQuantity, setCartItemQuantity] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const { cartItems } = useStoreContext()

  useEffect(() => {
    if(!cartItems){
      return
    }

    setCartItemQuantity(cartItems?.length)
  },[cartItems])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };


  return (
    <div className='header-container'>
      <img src={logo}/>
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          className='search-input'
          type="text"
          placeholder="Pesquise seu passeio"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className='submit-button' type="submit"><SearchIcon/></button>
      </form>
      <div className='cart-icon-container'>
        <button className='cart-icon-button' onClick={()=>setIsCartOpen(!isCartOpen)}>
          <CartHeaderIcon/>
        </button>
        <p>{cartItemQuantity}</p>   
      </div>
      {isCartOpen && <MiniCart cartItemQuantity={cartItemQuantity} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
    </div>
  );
};

export default Header;