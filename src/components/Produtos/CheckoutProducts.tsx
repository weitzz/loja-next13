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
import { Table, TableCell, TableRow } from "@/components/ui/table";

import { CiShop } from "react-icons/ci";

import { CounterProduct } from "@/components/Produtos/CounterProduct";
import { formatPrice } from "@/utils/formatPrice";
interface ContainerProductProps {
  produtos: any;
}

export function CheckoutProducts({ produtos }: ContainerProductProps) {
  return (
    <Table>
      {produtos.map((produto) => (
        <TableRow
          className="mb-2 flex justify-center  items-center "
          key={produto.id}
        >
          <TableCell>
            <CiShop size={40} />
          </TableCell>
          <TableCell>{produto.name}</TableCell>
          <TableCell>{produto.description}</TableCell>

          <TableCell className="text-right text-red-600 font-semibold">
            {formatPrice(produto.price)}
          </TableCell>
          <TableCell>
            <CounterProduct product={produto} isChekcout={true} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
