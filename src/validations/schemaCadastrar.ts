import * as z from "zod";
export const cadastroSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Nome do produto é obrigatório" }),
      description: z.string().min(1, { message: 'Descrição é obrigatório' }),
    price: z.coerce.number().min(1,{message: 'Preço é obrigatório'}),
  })
  .required();

   
    
    