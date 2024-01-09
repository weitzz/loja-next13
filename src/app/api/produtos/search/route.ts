// Importando os tipos necessários do Prisma
import { Product } from "@prisma/client";

// Importando os tipos do Next.js
import { NextApiRequest } from "next";
import {NextResponse} from 'next/server'

// Importando a instância do Prisma
import prisma from "@/lib/prisma";

// Definindo a função de manipulação da rota para o método GET
export async function GET(request: NextApiRequest) {
  try {
  const { q: query } = request.query || { q: '' };

// Verificando se 'query' é uma string
if (typeof query !== "string") {
  throw new Error("Invalid request");
}

    // Pesquisando produtos no banco de dados
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    // Criando um registro de consulta no banco de dados
    await prisma.searchQuery.create({
      data: {
        query,
      },
    });

      // Respondendo com os produtos encontrados
    
    return NextResponse.json({ products },{ status: 200 });
  } catch (error: any) {
    // Lidando com erros e respondendo com status 500
    console.error("Erro ao buscar produtos:", error);
     return NextResponse.json({ status: 500 })
  }
}
