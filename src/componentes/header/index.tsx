import React, {useState} from 'react';
import logo from '../assets/logo.png'
import './header.scss'
import { CartHeaderIcon } from '../assets/CartHeaderIcon';
import SearchIcon from '../assets/SearchIcon';



interface HeaderProps {
  onSearch: (searchValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className='header-container'>
      <img src={logo} alt="Header Image" />
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
      <CartHeaderIcon/>
    </div>
  );
};

export default Header;