import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";
import { FaCartShopping } from "react-icons/fa6";

import { CardProduto } from "../pages/Produtos/CardProduto";

interface ModalProps {
  show: boolean;
  setShow: () => void;
}

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { products, quantityInCart, priceInCart } = useCart();
  console.log(products);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="relative">
        <FaCartShopping size={25} />
        <div className="absolute right-[-0.5rem] top-[-0.5rem] flex items-center justify-center h-[1.25rem] p-[0.375rem] bg-orange-300 rounded-md">
          <span className="text-sm text-slate-50 font-semibold">
            {quantityInCart}
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex items-center justify-center space-x-2">
        <DrawerHeader className="text-center flex items-center flex-col">
          <DrawerTitle>Carrinho de compras</DrawerTitle>
          {products.length === 0 ? (
            <DrawerDescription>
              Você não possui nenhum item no carrinho
            </DrawerDescription>
          ) : (
            <DrawerDescription>Itens adicionados</DrawerDescription>
          )}
        </DrawerHeader>

        <CardProduto produtos={products} />
        <h3>Valor total:{priceInCart}</h3>
        <DrawerFooter>
          <Button>Finalizar compra</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
