import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IProduct } from "@/@types/products";
import { CiShop } from "react-icons/ci";

export function CardWithForm({ name, price, description }: IProduct) {
  return (
    <Card className="w-80">
      <CardHeader className="flex items-center ">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center flex-col">
        <CiShop size={80} />
        <span className="text-red-600 font-semibold">
          R${price.toLocaleString()}
        </span>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Adicionar ao carrinho</Button>
      </CardFooter>
    </Card>
  );
}
