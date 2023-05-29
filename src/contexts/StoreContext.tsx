import React, { createContext, useContext, useState } from 'react'
import { Product } from '../types/Product'

interface StoreProps {
  product: Product;
  
}

export interface StoreContextProps {

}

const StoreContext = createContext<StoreContextProps | null>(null)
const [cartItems, setCartItems] = useState<Product[]>([]);
const handleAddToCart = (product: Product) => {
  setCartItems([...cartItems, product]);
};

export const StoreContextProvider = ({
 
}: StoreContextProps) => {
  
  return (
    <StoreContext.Provider
      value={{}}
    >
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error(
      'useStoreContext must be used within a StoreContextProvider'
    )
  }

  return context
}

