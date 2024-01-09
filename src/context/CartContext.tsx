import { createContext, ReactNode, useContext } from "react";

import { IProduct } from "@/@types/products";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ICartProviderProps {
  children: ReactNode;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

interface ICartContextProps {
  products: IProductCart[];
  quantityInCart: number;
  priceInCart: number;

  addToCart: (product: IProduct) => void;
  removeQuantity: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  removeAllItemsFromCart: () => void;
}

export const CartContext = createContext({} as ICartContextProps);

function CartProvider({ children }: ICartProviderProps) {
  const [cartState, setCartState] = useLocalStorage("cartState", {
    products: [],
    quantityInCart: 0,
    priceInCart: 0,
  });

  const { products, quantityInCart, priceInCart } = cartState;

  const contextValue: ICartContextProps = {
    products,
    quantityInCart,
    priceInCart,
    addToCart: (product) => {
      setCartState((prevState) => {
        if (prevState.products.length === 0) {
          return {
            ...prevState,
            products: [{ ...product, quantity: 1 }],
            quantityInCart: 1,
            priceInCart: product.price,
          };
        }
        const productExists = prevState.products.find(
          (item: IProductCart) => item.id === product.id
        );
        if (productExists) {
          const newProducts = prevState.products.map((item: IProductCart) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          return {
            ...prevState,
            products: newProducts,
            quantityInCart: prevState.quantityInCart + 1,
            priceInCart: prevState.priceInCart + product.price,
          };
        }
        return {
          ...prevState,
          products: [...prevState.products, { ...product, quantity: 1 }],
          quantityInCart: prevState.quantityInCart + 1,
          priceInCart: prevState.priceInCart + product.price,
        };
      });
    },
    removeQuantity: (product) => {
      setCartState((prevState) => {
        const productExists = prevState.products.find(
          (item: IProductCart) => item.id === product.id
        );
        if (productExists) {
          const newProducts = prevState.products.map((item: IProductCart) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
          return {
            ...prevState,
            products: newProducts,
            quantityInCart: prevState.quantityInCart - 1,
            priceInCart: prevState.priceInCart - product.price,
          };
        }
      });
    },
    removeFromCart: (product) => {
      setCartState((prevState) => {
        const productExists = prevState.products.find(
          (item: IProductCart) => item.id === product.id
        );
        if (productExists) {
          const newProducts = prevState.products.filter(
            (item: IProductCart) => item.id !== product.id
          );
          return {
            ...prevState,
            products: newProducts,
            quantityInCart: prevState.quantityInCart - productExists.quantity,
            priceInCart:
              prevState.priceInCart - product.price * productExists.quantity,
          };
        }
      });
    },
    removeAllItemsFromCart: () => {
      setCartState((prevState) => {
        return {
          ...prevState,
          products: [],
          quantityInCart: 0,
          priceInCart: 0,
        };
      });
    },
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
