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

import { ProductCounter } from "@/components/ProductCounter/ProductCounter";
import { IProduct } from "@/@types/products";
import Container from "@/components/container";

interface CardProdutoProps {
  produtos: Array<IProduct>;
}

export function CardProduto({ produtos }: CardProdutoProps) {
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
              R$ {produto.price.toFixed(3)}
            </span>
          </CardContent>
          <CardFooter className="flex  justify-center">
            <ProductCounter product={produto} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
