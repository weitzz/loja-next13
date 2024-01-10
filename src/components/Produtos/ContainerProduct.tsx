"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CiShop } from "react-icons/ci";

import { CounterProduct } from "@/components/Produtos/CounterProduct";
import { formatPrice } from "@/utils/formatPrice";

interface ContainerProductProps {
  produtos: any;
}

export function ContainerProduct({ produtos }: ContainerProductProps) {
  return (
    <>
      {produtos.map((produto) => (
        <Card className="w-80" key={produto.id}>
          <CardHeader className="flex items-center ">
            <CardTitle>{produto.name}</CardTitle>
            <CardDescription>{produto.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center flex-col">
            <CiShop size={80} />
            <span className="text-red-600 font-semibold">
              {formatPrice(produto.price)}
            </span>
          </CardContent>
          <CardFooter className="flex  justify-center">
            <CounterProduct product={produto} isChekcout={false} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
