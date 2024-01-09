import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "@/reducers/reducer";
import {
  addToCartAction,
  removeAllItemsFromCartAction,
  removeFromCartAction,
  removeQuantityAction,
} from "@/reducers/actions";
import { IProduct } from "@/@types/products";

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
  const storedCartState = localStorage.getItem("cartState");
  const initialCartState = storedCartState
    ? JSON.parse(storedCartState)
    : { products: [], quantityInCart: 0, priceInCart: 0, typePayment: "" };

  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
  const { products, quantityInCart, priceInCart } = cartState;

  console.log("products", products);
  console.log("quantityInCart", quantityInCart);
  console.log("priceInCart", priceInCart);

  function updateLocalStorage() {
    const cartState = { products, quantityInCart, priceInCart };
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }

  const contextValue: ICartContextProps = {
    products,
    quantityInCart,
    priceInCart,
    addToCart: (product) => {
      dispatch(addToCartAction(product));
      updateLocalStorage();
    },
    removeQuantity: (product) => {
      dispatch(removeQuantityAction(product));
      updateLocalStorage();
    },
    removeFromCart: (product) => {
      dispatch(removeFromCartAction(product));
      updateLocalStorage();
    },
    removeAllItemsFromCart: () => {
      dispatch(removeAllItemsFromCartAction());
      updateLocalStorage();
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
