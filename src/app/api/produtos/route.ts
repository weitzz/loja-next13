import {NextResponse} from 'next/server'
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma  from '@/lib/prisma';
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({error: "Não autorizado"}, {status: 401})
    }
    const { name, price, description } = await request.json()

    try {
        await prisma.product.create({
            data: {
                name,price,description
            }
        })

        return NextResponse.json({message: 'Produto cadastrado com sucesso'})
    } catch (err) {
        return NextResponse.json({error: "Erro ao cadastrar o produto"}, {status: 400})
    }
    
  
}


export async function GET(request: Request){
  const { searchParams } = new URL(request.url)
  const nameProduct = searchParams.get("name")

  if(!nameProduct || nameProduct === ""){
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 400 })
  }

  try{
    const product = await prisma.product.findFirst({
      where:{
        name: nameProduct 
      }
    })

    return NextResponse.json(product)

  }catch(err){
    return NextResponse.json({ error: "Produto não encontrado" }, { status: 400 })
  }


}