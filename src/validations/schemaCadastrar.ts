import * as z from "zod";
export const cadastroSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Nome do produto é obrigatório" }),
      description: z.string().min(1, { message: 'Descrição é obrigatório' }),
    price: z.string().refine(value => /^\d+\.\d{2}$/.test(value) && value.length >= 1, {
      message: 'O preço deve ter o formato 0.00 e ser maior que 0',
    }),
  })
  .required();

   
    
    