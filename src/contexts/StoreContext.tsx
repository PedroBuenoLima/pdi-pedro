import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Product } from '../types/Product'
import usePasseiosData from '../hooks/usePasseiosData'

interface StoreContextProps {
  children?: ReactNode
  products?: Product[];
  cartItems?: Product[];
  setCartItems?: (cartItems: Product[]) => void
  deleteProductFromCart?: (product: Product) => void;
}

const StoreContext = createContext<StoreContextProps | null>(null)

export const StoreContextProvider = ({
  children,
}: StoreContextProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const products: Product[] = usePasseiosData();

  function deleteProductFromCart(product: Product): void {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  }

  return (
    <StoreContext.Provider
      value={{
        products,
        cartItems,
        setCartItems,
        deleteProductFromCart,
      }}
    >
      {children}
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
