import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

import Container from "@/components/container";
import prisma from "@/lib/prisma";

import { ContainerProduct } from "@/components/Produtos/ContainerProduct";
import Spinner from "@/components/Spinner/Spinner";

const Produtos = async ({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  const produtos = await prisma.product.findMany({
    where: {
      name: {
        contains: searchParams.query,
        mode: "insensitive",
      },
    },
  });

  return (
    <>
      <Container>
        <h2 className="text-slate-900 text-xl font-semibold text-center p-8">
          {produtos.length === 0
            ? "Nenhum produto cadastrado"
            : "Lista de produtos"}
        </h2>
      </Container>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <Suspense key={searchParams.query} fallback={<Spinner />}>
          <ContainerProduct produtos={produtos} />
        </Suspense>
      </section>
    </>
  );
};

export default Produtos;
