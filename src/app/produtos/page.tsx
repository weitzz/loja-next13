import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

import prisma from "@/lib/prisma";

import { ContainerProduct } from "@/components/Produtos/ContainerProduct";
import Spinner from "@/components/Spinner/Spinner";
import PaginationControls from "@/components/paginationsControls";
import Container from "@/components/container";

const Produtos = async ({
  searchParams,
}: {
  searchParams: { query: string | undefined; page: string; per_page: string };
}) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchParams.query,
        mode: "insensitive",
      },
    },
  });

  const productsPaginations = products.slice(start, end);

  return (
    <>
      <h2 className="text-slate-900 text-xl font-semibold text-center p-8">
        {products.length === 0
          ? "Nenhum produto cadastrado"
          : "Lista de produtos"}
      </h2>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        <Suspense key={searchParams.query} fallback={<Spinner />}>
          <ContainerProduct produtos={productsPaginations} />
        </Suspense>
      </section>
      <Container>
        <PaginationControls
          hasNextPage={end < products.length}
          hasPrevPage={start > 0}
        />
      </Container>
    </>
  );
};

export default Produtos;
