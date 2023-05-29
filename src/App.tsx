import React from 'react';
import Header from './componentes/header/index';
import './App.scss';
import Banner from './componentes/banner';

const App: React.FC = () => {

  const handleSearch = (searchValue: string) => {
    // Lógica de pesquisa aqui com base no searchValue
  };
  
  return (
    <div className="app-container">
      <Header onSearch={handleSearch}/>
      <Banner altText="banner principal" />
    </div>
  );
};

export default App;