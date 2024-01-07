import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { CardWithForm } from "@/components/pages/Produtos/produtos";
import Container from "@/components/container";

const Produtos = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      lista de produtos
      <CardWithForm />
    </Container>
  );
};

export default Produtos;
