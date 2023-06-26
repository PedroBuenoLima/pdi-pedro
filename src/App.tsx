import React from 'react';
import Header from './componentes/Header';
import './App.scss';
import Banner from './componentes/Banner';
import ProductList from './componentes/ProductList';
import Footer from './componentes/Footer';
import { StoreContextProvider } from './contexts/StoreContext'


const App: React.FC = () => {
  const handleSearch = (searchValue: string) => {
    // Lógica de pesquisa aqui com base no searchValue
  };


  return (
    <StoreContextProvider>
      <div>
        <div className="header-section">
          <Header onSearch={handleSearch}/>
        </div>
        <div className='app-container'>
          <Banner altText="banner principal" />
          <ProductList/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </StoreContextProvider>
  );
};

export default App;