import { useCart, IProductCart } from "@/context/CartContext";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { Minus, Plus } from "lucide-react";
import { BsCartPlusFill, BsCartXFill } from "react-icons/bs";

interface ICounterProductProps {
  product: any;
  isChekcout?: boolean | true;
}

export function CounterProduct({ product, isChekcout }: ICounterProductProps) {
  const {
    products,
    removeQuantity,
    addToCart,
    quantityInCart,
    removeFromCart,
  } = useCart();

  const productExists =
    products.length > 0 &&
    products.find((item: IProductCart) => item.id === product.id);

  const quantity =
    productExists && productExists.quantity ? productExists.quantity : 0;

  const isDisabledToRemove = quantity === 0;

  return (
    <div className="flex  items-center p-2 h-9 ">
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full "
          disabled={isDisabledToRemove}
          onClick={() => removeQuantity(product)}
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Remover</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-xl font-bold tracking-tighter">{quantity}</div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => addToCart(product)}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Adicionar</span>
        </Button>

        {isChekcout ? (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => removeFromCart(product)}
          >
            <BsCartXFill className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => addToCart(product)}
          >
            <BsCartPlusFill className="h-4 w-4" />
            <span className="sr-only">Adicionar no carrinho</span>
          </Button>
        )}
      </div>
    </div>
  );
}
