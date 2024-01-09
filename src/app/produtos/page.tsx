import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

import Container from "@/components/container";
import prisma from "@/lib/prisma";

import { CardProduto } from "@/components/pages/Produtos/CardProduto";

const Produtos = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  const produto = await prisma.product.findMany();

  console.log(produto);

  return (
    <>
      <Container>
        <h2 className="text-slate-900 text-xl font-semibold text-center p-8">
          Lista de Produtos
        </h2>
      </Container>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <CardProduto produtos={produto} />
      </section>
    </>
  );
};

export default Produtos;
