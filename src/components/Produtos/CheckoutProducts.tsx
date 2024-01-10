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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CiShop } from "react-icons/ci";

import { CounterProduct } from "@/components/Produtos/CounterProduct";

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
            R$ {produto.price.toFixed(3)}
          </TableCell>
          <TableCell>
            <CounterProduct product={produto} isChekcout={true} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
