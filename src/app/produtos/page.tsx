import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { CardWithForm } from "@/components/pages/Produtos/produtos";
import Container from "@/components/container";
import prisma from "@/lib/prisma";

const Produtos = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  const produtos = await prisma.product.findMany();

  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <Container>
        <h2 className="text-slate-900 text-xl font-semibold text-center p-8">
          Lista de Produtos
        </h2>
      </Container>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {produtos.map((produto) => (
          <CardWithForm
            key={produto.id}
            name={produto.name}
            description={produto.description}
            price={produto.price}
          />
        ))}
      </section>
    </main>
  );
};

export default Produtos;
