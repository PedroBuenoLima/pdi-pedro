import React, { useState } from 'react';
import Header from './componentes/header/Header';
import './App.scss';
import Banner from './componentes/banner';
import ProductList from './componentes/productCard/productList';
import { Product } from '../src/types/Product';
import Footer from './componentes/footer/Footer';


const App: React.FC = () => {
  const handleSearch = (searchValue: string) => {
    // Lógica de pesquisa aqui com base no searchValue
  };

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };
  
  return (
    <div>
      <div className="">
        <Header onSearch={handleSearch}/>
      </div>
      <div className='app-container'>
        <Banner altText="banner principal" />
        <ProductList handleAddToCart={handleAddToCart} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;