'use client';

import { createContext, useState } from 'react';

import { Asteroid } from '@/types/astreoids';
import { ContextProviderProps } from '@/types/context';

interface CartContextProps {
  cart: Asteroid[];
  addToCart: (asteroid: Asteroid) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider = ({ children }: ContextProviderProps) => {
  const [cart, setCart] = useState<Asteroid[]>([]);
  const addToCart = (asteroid: Asteroid) => {
    setCart([...cart, asteroid]);
  };
  const removeFromCart = (asteroidId: string) => {
    const newList = cart.filter((asteroid) => asteroid.id !== asteroidId);
    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
