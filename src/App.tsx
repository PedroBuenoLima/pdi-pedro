import React from 'react';
import Header from './componentes/header/index';
import './App.scss';
import Banner from './componentes/banner';
import ProductList from './componentes/productCard/productList';

const App: React.FC = () => {

  const handleSearch = (searchValue: string) => {
    // Lógica de pesquisa aqui com base no searchValue
  };
  
  return (
    <div>
      <div className="">
        <Header onSearch={handleSearch}/>
      </div>
      <div className='app-container'>
        <Banner altText="banner principal" />
        <ProductList/>
      </div>
    </div>
  );
};

export default App;